// ============================================================================
// Task: Parsing and Inspecting URLs with Node's `url` Module
// ============================================================================
// • Definition:
//   The `url` module exposes the WHATWG `URL` class, which lets you parse
//   any string into a structured URL object. From that object you can read
//   each component (protocol, host, pathname, search string) and access
//   the query parameters via the `searchParams` API — useful for routing,
//   logging, and request validation in a server.
// • Objective:
//   Parse a sample Google search URL and print each interesting component:
//   protocol, host, pathname, full search string, and the value of the `q`
//   query parameter. Also demonstrate `searchParams.has(...)` for checking
//   whether a key is present and `href` for getting the normalised URL.
// • Implementation:
//   - `const url = require('url')` imports the legacy/url module; the
//     WHATWG `URL` global is available without `new` here because Node
//     exposes it on the module's exports.
//   - `new URL('https://www.google.com/search?q=hello')` constructs a
//     parsed URL object.
//   - `.protocol`, `.host`, `.pathname`, `.search`, and `.href` expose
//     the relevant pieces.
//   - `.searchParams.get('q')` reads the value of the `q` query parameter.
//   - `.searchParams.has('q')` returns `true` if `q` is present.
// • Validation:
//   Running `node url.js` prints lines such as:
//     "protocol:https:"
//     "host:www.google.com"
//     "pathname:/search"
//     "search:?q=hello"
//     "searching for category:hello"
//     "searching for category:true"
//     "https://www.google.com/search?q=hello"
//   confirming that every component was read correctly.
// ============================================================================
const url = require('url');

const myurl = new URL('https://www.google.com/search?q=hello');

console.log(`protocol:${myurl.protocol}`);
console.log(`host:${myurl.host}`);
console.log(`pathname:${myurl.pathname}`);
console.log(`search:${myurl.search}`);

const searchParams = myurl.searchParams;
console.log(`searching for category:${searchParams.get('q')}`);
console.log(`searching for category:${searchParams.has('q')}`);
console.log(myurl.href);