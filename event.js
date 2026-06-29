// ============================================================================
// Task: Node's Built-in `events` Module
// ============================================================================
// • Definition:
//   The `events` module is the foundation of much of Node's asynchronous
//   behaviour. It exposes an `EventEmitter` class that lets objects
//   publish named events and lets other code subscribe to them with
//   `.on(event, handler)`. Emitting an event (`emitter.emit(event, ...)`)
//   synchronously calls every registered listener, passing along any
//   extra arguments.
// • Objective:
//   Demonstrate the subscribe/publish pattern by registering two listeners
//   (`greet`, `task`) and then firing each of them with arguments.
// • Implementation:
//   - `require('events')` returns the module; `new eventemmitter()` creates
//     an emitter instance named `emmiter`.
//   - `emmiter.on('greet', (name, age) => { ... })` registers a listener
//     that prints a greeting plus the age.
//   - `emmiter.on('task', (task) => { ... })` registers a listener that
//     prints a task description.
//   - `emmiter.emit('greet', 'mohammed', 20)` fires the `greet` event,
//     delivering both arguments to the listener.
//   - `emmiter.emit('task', 'reading a book')` fires the `task` event.
// • Validation:
//   Running `node event.js` prints:
//     "hello mohammed"
//     "you are 20 years old"
//     "your task is reading a book"
//   confirming that both listeners fired and received their arguments.
// ============================================================================
const eventemmitter = require('events');
const emmiter = new eventemmitter();

emmiter.on('greet' ,(name,age)=>{
    console.log(`hello ${name}`);
    console.log(`you are ${age} years old`);
})

emmiter.on('task',(task)=>{
    console.log(`your task is ${task}`);
})
emmiter.emit('greet','mohammed',20);
emmiter.emit('task','reading a book');