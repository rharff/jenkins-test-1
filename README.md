# Todo Demo (HTML / CSS / JS)

This is a tiny demo Todo web app implemented with plain HTML, CSS and JavaScript. It stores todos in `localStorage` so items persist between reloads.

How to run

- Open `index.html` in a browser by double-clicking it, or run a static server in the folder:

```bash
# serve on http://localhost:8000
python3 -m http.server 8000

# or open in default browser on Linux
xdg-open index.html
```

Features

- Add todos by typing in the input and pressing Enter
- Toggle complete by using the checkbox
- Remove items with the ✕ button
- Filter by All / Active / Completed
- Clear completed items

Files

- `index.html` — markup and UI
- `style.css` — styling
- `script.js` — app logic and persistence
