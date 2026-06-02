from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "pcb" / "pcb.obj"
DST = ROOT / "assets" / "pcb" / "pcb-parts.obj"


def split_obj(src: Path, dst: Path) -> int:
    lines = src.read_text(encoding="utf-8", errors="replace").splitlines()
    out: list[str] = ["mtllib pcb.mtl"]
    counters: dict[str, int] = {}
    block: list[str] = []
    objects = 0

    def flush() -> None:
        nonlocal objects, block
        if not block:
            return
        mtl = "part"
        for ln in block:
            if ln.startswith("usemtl "):
                mtl = ln.split(maxsplit=1)[1]
                break
        counters[mtl] = counters.get(mtl, 0) + 1
        name = f"{mtl}_{counters[mtl]}"
        out.append(f"o {name}")
        out.extend(block)
        objects += 1
        block = []

    for line in lines:
        if line.startswith("mtllib"):
            continue
        if line.startswith("usemtl "):
            flush()
            block = [line]
        else:
            block.append(line)
    flush()

    dst.write_text("\n".join(out) + "\n", encoding="utf-8")
    return objects


if __name__ == "__main__":
    if not SRC.is_file():
        raise SystemExit(f"Нет файла: {SRC}")
    n = split_obj(SRC, DST)
