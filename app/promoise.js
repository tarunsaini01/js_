// ============================================================================
// Task: Introduction to Promises
// ============================================================================
// • Definition:
//   A Promise is an object that represents the eventual completion (or
//   failure) of an asynchronous operation. It is the modern alternative to
//   deeply nested callbacks and is the foundation of `async/await`. A
//   promise is in one of three states: pending, fulfilled, or rejected.
// • Objective:
//   Build a simulated asynchronous "fetch user" operation that resolves
//   with a user object after a delay, and consume it with `.then`,
//   `.catch`, and `.finally`.
// • Implementation:
//   - `new Promise((resolve, reject) => { ... })` creates the promise.
//   - `setTimeout(..., 2000)` simulates a 2-second network call.
//   - On success, `resolve({ id, name, role })` fulfils the promise with a
//     user object; on failure, `reject("error: ...")` rejects it.
//   - `.then` runs the success branch (logs the user data).
//   - `.catch` runs the failure branch (logs a generic error).
//   - `.finally` always runs last (logs "operation complete").
// • Validation:
//   After roughly two seconds the console prints the user data followed by
//   "operation complete", confirming the full promise lifecycle worked.
// ============================================================================

// promise
const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucess = true;
        if (sucess) {
            resolve({ id: 1010, name: "saksham", role: "developer" });
        } else {
            reject("error:failed to fetch user data");
        }
    }, 2000);
});

fetchUser
    .then((data) => {
        console.log("data", data);
    })
    .catch((error) => {
        console.log("error generated");
    })
    .finally(() => {
        console.log("operation complete");
    });