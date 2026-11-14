#!/usr/bin/env python3
"""Builds the handbook from src/ into S24-FE-Handbuch.html (standalone, offline) and optionally an artifact body file."""
import sys, pathlib
root = pathlib.Path(__file__).parent
src = root / 'src'
shell = (src / 'shell.html').read_text(encoding='utf-8')
import base64
faces = []
for line in (src / 'fonts' / 'fonts.txt').read_text().strip().splitlines():
    fam, weight, fn, rng = line.split('|')
    b64 = base64.b64encode((src / 'fonts' / fn).read_bytes()).decode()
    faces.append(f"@font-face{{font-family:'{fam}';font-style:normal;font-weight:{weight};font-display:swap;"
                 f"src:url(data:font/woff2;base64,{b64}) format('woff2');unicode-range:{rng};}}")
shell = shell.replace('/*FONTS*/', '\n'.join(faces))
body = (shell
        .replace('/*STYLES*/', (src / 'styles.css').read_text(encoding='utf-8'))
        .replace('<!--CONTENT-->', (src / 'content.html').read_text(encoding='utf-8'))
        .replace('/*SCRIPTS*/', '\n'.join((src / f).read_text(encoding='utf-8') for f in ('mocks.js', 'data.js', 'data2.js', 'data3.js', 'data4.js', 'data5.js', 'data6.js', 'app.js', 'interactive.js', 'interactive2.js', 'features.js', 'tooltips.js'))))
standalone = ('<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n'
              '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
              + body.replace('<header class="topbar">', '</head>\n<body>\n<header class="topbar">', 1)
              + '\n</body>\n</html>\n')
(root / 'S24-FE-Handbuch.html').write_text(standalone, encoding='utf-8')
import zipfile
with zipfile.ZipFile(root / 'S24-FE-Handbuch.zip', 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    info = zipfile.ZipInfo('S24-FE-Handbuch.html', date_time=(2026, 11, 14, 12, 0, 0))
    info.compress_type = zipfile.ZIP_DEFLATED
    z.writestr(info, standalone.encode('utf-8'))
if len(sys.argv) > 1:
    pathlib.Path(sys.argv[1]).write_text(body, encoding='utf-8')
print('ok', len(standalone))
