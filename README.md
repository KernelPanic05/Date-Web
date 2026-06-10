# Page Demo

Simple static web page with:

- A first screen asking `Quieres tener una cita conmigo hoy?`
- A `Si` button
- A `No` button that moves when the cursor gets close
- A second screen with food choices: `Salado`, `Dulce`, `Ambos`
- Extra emojis and CSS animations

## Files

- `index.html`
- `styles.css`
- `script.js`
- `menu.html`
- `menu.css`
- `menu.js`

## Run on Ubuntu

Because this is a static site, you can host it with:

- `nginx`
- `apache2`
- `python3 -m http.server`

Example quick test:

```bash
cd Page-demo
python3 -m http.server 8080
```

Then open:

`http://YOUR_SERVER_IP:8080`
