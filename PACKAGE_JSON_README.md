# Project-Zero `package.json` Manifest

## Task: Project-Zero `package.json` Manifest

### Definition
`package.json` is the manifest file that npm and Node consult to
understand the project. It records the project name and version, defines
the entry point, declares CLI scripts (`npm start`, `npm run dev`), lists
runtime and development dependencies, and specifies the module system
(`commonjs`) used throughout the project.

### Objective
Provide a self-describing manifest so anyone (or any tool) can run,
install, and reason about the project without additional context.

### Implementation
- `"name"` and `"version"` identify the package.
- `"main": "index.js"` tells Node which file is the project's entry
  point when it is required as a module by other packages.
- `"scripts"` define convenient CLI aliases: `npm start` runs
  `node url.js`, and `npm run dev` runs `url.js` under `nodemon`
  (which automatically restarts on file changes).
- `"type": "commonjs"` opts the project into the CommonJS module
  system, which is why the `.js` files use `require(...)` rather
  than `import`.
- `"dependencies"` lists packages required at runtime — here,
  `express` for building web apps.
- `"devDependencies"` lists packages only needed during development
  — here, `nodemon` for hot-reload while iterating.

### Validation
Running `npm install` in this folder installs both Express and
nodemon. `npm start` boots the URL demonstration; `npm run dev`
does the same with auto-restart on save.

---

> Note: JSON does not permit comments, so this explanatory text lives in
> `PACKAGE_JSON_README.md` rather than in the manifest itself.
