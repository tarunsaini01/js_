// ============================================================================
// Task: Minimal HTTP Server with Node's `http` Module
// ============================================================================
// • Definition:
//   Node.js ships with a built-in `http` module that lets you create a
//   web server without any third-party dependencies. The
//   `http.createServer(callback)` factory takes a function that is invoked
//   once per request and receives two objects: `req` (the incoming request)
//   and `res` (the outgoing response). This file demonstrates a tiny
//   router built from `if`/`else` statements on `req.url`.
// • Objective:
//   Stand up a server on port 5000 that responds with a different page for
//   each known route (`/`, `/about`) and falls back to a 404 page for
//   anything else.
// • Implementation:
//   - `const http = require('http')` imports the built-in module.
//   - `http.createServer((req, res) => { ... })` registers the request
//     handler.
//   - When `req.url === '/'`, the server logs the URL and ends the response
//     with the text "home pae" (intentional typo preserved from the
//     original example).
//   - When `req.url === '/about'`, it returns "Welcome to about page".
//   - Any other URL triggers a fallback `res.end("404 page not found")`.
//   - `server.listen(5000, ...)` binds the server to port 5000 and prints
//     a confirmation message when the port is open.
// • Validation:
//   Running `node http.js` and visiting `http://localhost:5000/` prints
//   "home pae" in the browser; `/about` prints "Welcome to about page";
//   any other path prints "404 page not found". The console also logs the
//   incoming URL for each request.
// ============================================================================
const http =require('http');
//req - request obj and res - response obj- claaback function
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        console.log("request url",req.url);
        return res.end("home pae");

    }
    else if(req.url === '/about'){
        return res.end("Welcome to about page");
    }
    res.end("404 page not found");
})

server.listen(5000,() => {
    console.log("server is listening on port 5000");
})