# Cyberpunk Calculator

A small, stylish web calculator with a neon "cyberpunk" theme. The app is a single-page static UI served by a tiny Express server for local development and simple deployment.

## Tech stack

- Frontend: plain HTML, CSS, and vanilla JavaScript (`public/`)
- Server: Node.js + Express (`server.js`)
- Package manager: npm (see `package.json`)

## Quick start (Windows / PowerShell)

1. Install dependencies:

```powershell
npm install
```

2. Start the server:

```powershell
node server.js
```

3. Open the app in your browser:

http://localhost:3000

Note: `package.json` currently does not provide a `start` script. You can run the server directly with Node as shown above, or add a start script if you prefer.

## Usage

- Click number buttons to enter values.
- Click an operator (+, -, *, /) to set the operation; enter the next number and press `=` to compute.
- `AC` clears the current calculation.
- `DEL` removes the last digit.
- `%` computes `previous / 100 * current`.

## File layout

- `server.js` — small Express server that serves the `public/` directory.
- `public/index.html` — calculator UI.
- `public/style.css` — neon styling and layout.
- `public/script.js` — calculator logic and DOM handling.
- `package.json` — project metadata and dependencies.

## Development notes & suggestions

- Add a `start` script to `package.json` for convenience, e.g.:

```json
"scripts": {
	"start": "node server.js"
}
```

- Consider adding automated tests for the calculation logic (extract pure functions) and a CI workflow for linting.

## License

This project uses the ISC license (see `package.json`).

