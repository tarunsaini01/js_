// ============================================================================
// Task: Asynchronous File I/O with `fs.promises`
// ============================================================================
// • Definition:
//   The `fs` (file system) module gives Node access to the underlying
//   filesystem. The `.promises` flavour returns promise-based APIs so you
//   can `await` reads and writes inside `async` functions, avoiding nested
//   callbacks. The `path` module provides portable utilities for joining
//   and inspecting paths that work on every operating system.
// • Objective:
//   Demonstrate the full lifecycle of a small text file: build a path
//   relative to the current file, write "Hello World" to it, and then
//   read it back and print the contents. Errors are caught and logged so
//   the script never crashes silently.
// • Implementation:
//   - `fs = require('fs').promises` selects the promise-based API.
//   - `path = require('path')` and `path.join(__dirname, "index.txt")`
//     produce an absolute path that works on Windows, macOS, and Linux.
//   - `await fs.writeFile(filepath, "Hello World")` creates (or
//     overwrites) the file.
//   - `await fs.readFile(filepath)` reads the file as a `Buffer`, which
//     is interpolated into the template literal and printed.
//   - The whole sequence is wrapped in `try/catch` so any I/O failure is
//     logged with a clear message.
// • Validation:
//   When uncommented and executed with `node index.js`, the script
//   writes the file, reads it back, and prints "File created" followed
//   by "File content: Hello World".
// ============================================================================

// const fs = require('fs').promises;
// const path = require('path');

// async function handlefile(){
//     const filepath = path.join(__dirname,"index.txt");

//     try{
//         await fs.writeFile(filepath,"Hello World");
//         console.log("File created");

//         const data = await fs.readFile(filepath);
//         console.log(`File content: ${data}`);
//     }catch(error){
//         console.log("error handling file",error);

//     }
// }
// handlefile();

// ============================================================================
// Task: Path Manipulation with the `path` Module
// ============================================================================
// • Definition:
//   Hard-coding file paths with string concatenation breaks the moment you
//   run on a different operating system (Windows uses `\`, Unix uses `/`).
//   The `path` module abstracts that away with `join`, `resolve`,
//   `basename`, `extname`, and `dirname`.
// • Objective:
//   Show how to build a relative path, resolve it to an absolute one,
//   and then split a filename into its base name, extension, and parent
//   directory — all without hard-coding any separators.
// • Implementation:
//   - `path.join('config', 'database', 'db.json')` joins segments using
//     the platform-appropriate separator and returns `'config/database/
//     db.json'` (or `'config\\database\\db.json'` on Windows).
//   - `path.resolve('app.js')` turns a relative path into an absolute
//     one based on the current working directory.
//   - `__filename` (Node's special variable for the current file) is fed
//     to `basename`, `extname`, and `dirname` to extract each piece.
// • Validation:
//   When uncommented and run, the script prints the joined path, the
//   absolute path, and an object containing the file's base name,
//   extension, and directory.
// ============================================================================

// path demo 0

// const path =require('path');

// const targetpath = path.join('config','database','db.json');
// console.log("joined path",targetpath);

// const absolutepath = path .resolve("app.js");
// console.log("absolute path",absolutepath);

// console.log({
//     filename : path.basename(__filename),
//     extension: path.extname(__filename),
//     directory: path.dirname(__filename)
// })

// ============================================================================
// Task: Inspecting the Operating System with the `os` Module
// ============================================================================
// • Definition:
//   The `os` module exposes information about the host machine: CPU
//   architecture, OS type, platform, home directory, hostname, network
//   interfaces, free/total memory, and uptime. It is invaluable when
//   writing tools that adapt to the runtime environment (e.g. resource
//   monitors, deployment scripts, diagnostic dashboards).
// • Objective:
//   Print every common piece of OS information to the console, then
//   convert memory sizes from bytes into megabytes and uptime from
//   seconds into hours for human readability.
// • Implementation:
//   - `os.arch()`, `os.type()`, `os.platform()`, `os.homedir()`, and
//     `os.hostname()` each return a single string describing the
//     environment.
//   - `os.cpus().length` returns the number of logical CPU cores.
//   - `os.networkInterfaces()` returns an object describing every
//     network interface — useful for discovering IPs.
//   - `os.freemem()` and `os.totalmem()` return raw byte counts; we
//     divide twice by 1024 to convert to megabytes.
//   - `os.uptime()` returns seconds; dividing by 3600 yields hours and
//     `.toFixed(2)` formats the result to two decimal places.
// • Validation:
//   When uncommented and run, the script prints each piece of OS info
//   followed by the formatted free RAM, total RAM, and system uptime.
// ============================================================================

// operating system demo 0

// const os = require('os');

// console.log("operating system", os.arch());
// console.log("operating system", os.type());
// console.log("operating system", os.platform());
// console.log("operating system", os.homedir());
// console.log("operating system", os.hostname());
// console.log("total cpu cores", os.cpus().length);
// console.log(os.networkInterfaces());

// const freeRam = Math.round(os.freemem() / 1024 / 1024);
// const totalRam = Math.round(os.totalmem() / 1024 / 1024);

// console.log("free ram", freeRam);
// console.log("total ram", totalRam);
// console.log(`system update: ${ (os.uptime() / 3600).toFixed(2) } hours`);
