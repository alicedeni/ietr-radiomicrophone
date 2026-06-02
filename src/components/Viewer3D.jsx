import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function extractDesignator(name) {
  if (!name) return null;
  const m = String(name).toUpperCase().match(/\b(R|C|L|T)\d+\b/);
  return m ? m[0] : null;
}

function normalizePickId(name) {
  if (!name) return "component";
  const s = String(name).trim();
  const empty = s.match(/^empty_(\d+)$/i);
  if (empty) return `idx_${empty[1]}`;
  const tailNum = s.match(/(\d+)(?!.*\d)/);
  if (tailNum) return `idx_${tailNum[1]}`;
  return s.replace(/\s+/g, "_");
}

function getNamedAncestor(node, stopAt) {
  let cur = node;
  while (cur && cur !== stopAt) {
    if (cur.name) return cur.name;
    cur = cur.parent;
  }
  return node?.name || null;
}

export default function Viewer3D({ onPickPart, autoRotate = false, resetTick = 0 }) {
  const mountRef = useRef(null);
  const [status, setStatus] = useState("Загрузка 3D...");
  const controlsRef = useRef(null);
  const fitCameraRef = useRef(null);
  const rootModelRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f3e9);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 2000);
    camera.position.set(2.2, 1.8, 2.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;
    let rootModel = null;
    let selectedMeshes = [];
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const groups = new Map();

    scene.add(new THREE.AmbientLight(0xffffff, 0.85));
    const key = new THREE.DirectionalLight(0xffffff, 0.75);
    key.position.set(6, 8, 5);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x3b4db0, 0.2);
    fill.position.set(-5, -3, -4);
    scene.add(fill);

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight || 240;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const fitCamera = (object) => {
      const box = new THREE.Box3().setFromObject(object);
      if (box.isEmpty()) return;
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const radius = Math.max(size.x, size.y, size.z) * 0.8 || 1;
      controls.target.copy(center);
      camera.position.set(
        center.x + radius * 1.4,
        center.y + radius * 1.1,
        center.z + radius * 1.5
      );
      camera.near = radius / 100;
      camera.far = radius * 100;
      camera.updateProjectionMatrix();
      controls.update();
    };
    fitCameraRef.current = fitCamera;

    const loader = new GLTFLoader();
    loader.load(
      "/models/pcb.glb",
      (gltf) => {
        const root = gltf.scene;
        root.traverse((node) => {
          if (!node.isMesh) return;
          node.castShadow = true;
          node.receiveShadow = true;
          if (Array.isArray(node.material)) {
            node.material.forEach((m) => (m.side = THREE.DoubleSide));
          } else if (node.material) {
            node.material.side = THREE.DoubleSide;
          }
          const groupName = getNamedAncestor(node, root) || "component";
          node.userData.pickGroup = groupName;
          if (!groups.has(groupName)) groups.set(groupName, []);
          groups.get(groupName).push(node);
        });
        scene.add(root);
        rootModel = root;
        rootModelRef.current = root;
        fitCamera(root);
        setStatus("");
      },
      undefined,
      () => setStatus("Не удалось загрузить pcb.glb")
    );

    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    const onPointerDown = (event) => {
      if (!rootModel) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);

      const hits = raycaster.intersectObjects(rootModel.children, true);
      if (!hits.length) return;
      const mesh = hits[0].object;
      if (!mesh?.isMesh) return;

      selectedMeshes.forEach((m) => {
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        mats.forEach((mat) => mat?.emissive?.setHex(0x000000));
      });

      const pickGroup = mesh.userData.pickGroup || mesh.name || "component";
      selectedMeshes = groups.get(pickGroup) || [mesh];
      selectedMeshes.forEach((m) => {
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        mats.forEach((mat) => mat?.emissive?.setHex(0x2f3d8c));
      });

      const designator = extractDesignator(pickGroup);
      onPickPart?.(designator || normalizePickId(pickGroup));
    };
    renderer.domElement.addEventListener("pointerdown", onPointerDown);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      controls.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (!controlsRef.current) return;
    controlsRef.current.autoRotate = autoRotate;
    controlsRef.current.autoRotateSpeed = 1.2;
  }, [autoRotate]);

  useEffect(() => {
    if (!fitCameraRef.current || !rootModelRef.current) return;
    fitCameraRef.current(rootModelRef.current);
  }, [resetTick]);

  return (
    <div className="viewer3d">
      <div className="viewer3d__canvas" ref={mountRef}>
        {status ? <span className="viewer3d__label">{status}</span> : null}
      </div>
    </div>
  );
}
