#!/usr/bin/env python3
"""Builds the handbook from src/ into index.html (standalone) and optionally an artifact body file."""
import sys, pathlib
root = pathlib.Path(__file__).parent
src = root / 'src'
shell = (src / 'shell.html').read_text(encoding='utf-8')
body = (shell
        .replace('/*STYLES*/', (src / 'styles.css').read_text(encoding='utf-8'))
        .replace('<!--CONTENT-->', (src / 'content.html').read_text(encoding='utf-8'))
        .replace('/*SCRIPTS*/', '\n'.join((src / f).read_text(encoding='utf-8') for f in ('mocks.js', 'data.js', 'app.js'))))
standalone = ('<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n'
              '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
              + body.replace('<header class="topbar">', '</head>\n<body>\n<header class="topbar">', 1)
              + '\n</body>\n</html>\n')
(root / 'index.html').write_text(standalone, encoding='utf-8')
if len(sys.argv) > 1:
    pathlib.Path(sys.argv[1]).write_text(body, encoding='utf-8')
print('ok', len(standalone))
