"""將客人提供的原始照片壓縮為網站用最佳化圖片（輸出到 public/images/）"""
from pathlib import Path
from PIL import Image

SRC = Path("src/assets/originals")
OUT = Path("public/images")
OUT.mkdir(parents=True, exist_ok=True)

# (來源檔名, 輸出檔名, 目標寬度)
jobs = [
    ("172801273143275000 (1).jpeg", "hero.jpg", 1920),          # Aston Martin DBX 暗色正面 → Hero
    ("172827805158582700.jpeg", "about.jpg", 1600),             # BMW iX 店面全景 → 公司簡介
    ("172827806715160300.jpeg", "cat-coating.jpg", 1000),       # 後視鏡鏡面反射 → 鍍膜
    ("172800915981945900.jpeg", "cat-wash.jpg", 1000),          # BMW iX 45° → 洗車
    ("172800919256285800.jpeg", "cat-detail.jpg", 1000),        # 大燈漆面特寫 → 美容
    ("172800934889869800.jpeg", "cat-interior.jpg", 1000),      # Aston 內裝 → 車廂護理
]

for src_name, out_name, width in jobs:
    img = Image.open(SRC / src_name).convert("RGB")
    if img.width > width:
        h = round(img.height * width / img.width)
        img = img.resize((width, h), Image.LANCZOS)
    out_path = OUT / out_name
    img.save(out_path, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"{out_name}: {img.width}x{img.height}, {out_path.stat().st_size // 1024} KB")
