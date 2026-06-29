// ============================================================================
// Task: Promise Chaining
// ============================================================================
// • Definition:
//   Promise chaining is the pattern of linking multiple `.then` calls so that
//   each step runs only after the previous one has resolved. It is the modern
//   replacement for deeply nested callbacks and keeps async code flat and
//   readable.
// • Objective:
//   Simulate a three-step restaurant visit (order → eat → leave) using
//   promise chains and confirm that each step happens in order.
// • Implementation:
//   - Each function returns a new Promise that resolves after a 1-second
//     `setTimeout`, mimicking a real API call.
//   - `.then(burger => eatFood(burger))` passes the resolved value of one
//     promise into the next, building a clear data pipeline.
//   - `.catch` at the end handles any failure from any step in the chain.
// • Validation:
//   Running the file prints in this order: "order placed" → "eating burger"
//   → "leaving restaurant with food eaten" → "now going home".
// ============================================================================

function orderfood() {
    return new Promise((resolve) => {
        console.log("order placed");
        setTimeout(() => { resolve("burger"); }, 1000);
    });
}

function eatFood(burger) {
    return new Promise((resolve) => {
        console.log(`eating ${burger}`);
        setTimeout(() => { resolve("food eaten"); }, 1000);
    });
}

function leaveRestaurant(wrapper) {
    return new Promise((resolve) => {
        console.log(`leaving restaurant with ${wrapper}`);
        setTimeout(() => { resolve("left restaurant"); }, 1000);
    });
}

orderfood()
    .then((burger) => eatFood(burger))
    .then((wrapper) => leaveRestaurant(wrapper))
    .then((finalStatus) => console.log("now going home"))
    .catch((error) => console.log("error generated"));

// ============================================================================
// Task: Callback Functions
// ============================================================================
// • Definition:
//   A callback is a function passed as an argument to another function so it
//   can be invoked later. This is the foundation on which promises were built
//   — learning callbacks first makes it easier to understand why promises
//   exist.
// • Objective:
//   Pass a named function (`display`) into another function (`student`) and
//   have it executed after a 5-second delay, demonstrating how asynchronous
//   behaviour can be expressed with plain functions.
// • Implementation:
//   - `student(name, callback)` waits 5 seconds, logs the name, then invokes
//     the supplied callback.
//   - `display()` is the callback that prints a welcome message.
//   - `student("saksham", display)` ties them together.
// • Validation:
//   After ~5 seconds the console prints "student name is saksham", then
//   "fetching data from database.....", then "welcome to callback function".
// ============================================================================

function student(name, callback) {
    setTimeout(() => {
        console.log(`student name is ${name}`);
        console.log("fetching data from database.....");
        callback();
    }, 5000);
}

function display() {
    console.log("welcome to callback function");
}

student("saksham", display);

// ============================================================================
// Task: Callback Hell
// ============================================================================
// • Definition:
//   "Callback hell" describes the situation where many dependent async steps
//   are nested inside each other, producing code that is hard to read, hard
//   to debug, and hard to maintain. This section shows the problem so the
//   later promise-based solutions feel like a clear improvement.
// • Objective:
//   Walk through a realistic four-step social-media flow:
//     1. Validate a login token.
//     2. Fetch the user profile.
//     3. Fetch the user's posts.
//     4. Fetch comments for the first post.
// • Implementation:
//   - Each step is its own function that calls back with `(error, result)`.
//   - Inside the success branch of one call, the next step is invoked — and
//     so on — producing the characteristic pyramid shape of callback hell.
// • Validation:
//   Running the file prints the steps in order: "token validated" →
//   "fetching profile for saksham" → "fetching posts for saksham" →
//   "fetching comments for post 1" → "comments fetched successfully ...".
// ============================================================================

// What Does Callback Hell Look Like?
// Imagine a scenario where a user visits a social media page. To display
// the page, we need to do four things in exact order:
//   1. Validate the user's login token.
//   2. Fetch their user profile.
//   3. Fetch their recent posts.
//   4. Fetch the comments on those posts.
// Here is what that looks like using traditional callbacks:

function validatetoken(token, callback) {
    setTimeout(() => {
        console.log("token validated");
        const error = null;
        const tokenvalid = { userid: 1010, name: "saksham" };
        callback(error, tokenvalid);
    }, 1000);
}

function getUserProfile(user, callback) {
    setTimeout(() => {
        console.log(`fetching profile for ${user.name}`);
        const error = null;
        const userprofile = { age: 25, location: "delhi" };
        callback(error, userprofile);
    }, 1000);
}

function getUserPosts(user, callback) {
    setTimeout(() => {
        console.log(`fetching posts for ${user.name}`);
        const error = null;
        const userposts = [
            { postId: 1, content: "hello world" },
            { postId: 2, content: "callback hell" },
        ];
        callback(error, userposts);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(() => {
        console.log(`fetching comments for post ${post.postId}`);
        const error = null;
        const comments = [
            { commentId: 1, content: "nice post" },
            { commentId: 2, content: "thanks for sharing" },
        ];
        callback(error, comments);
    }, 1000);
}

validatetoken("token123", (error, tokenvalid) => {
    if (error) {
        console.log("error validating token");
    } else {
        getUserProfile(tokenvalid, (error, userprofile) => {
            if (error) {
                console.log("error fetching user profile");
            } else {
                getUserPosts(tokenvalid, (error, userposts) => {
                    if (error) {
                        console.log("error fetching user posts");
                    } else {
                        getComments(userposts[0], (error, comments) => {
                            if (error) {
                                console.log("error fetching comments");
                            } else {
                                console.log("comments fetched successfully", comments[1]);
                            }
                        });
                    }
                });
            }
        });
    }
});

// ============================================================================
// Task: Promise.all
// ============================================================================
// • Definition:
//   `Promise.all` runs many promises in parallel and waits for **all** of
//   them to succeed. If even one promise rejects, the whole thing rejects
//   immediately with that reason. It is the go-to helper when a task depends
//   on every input being available.
// • Objective:
//   Show both the success case (two fast promises) and the failure case
//   (one of the three promises rejects).
// • Implementation:
//   - `fetchData1`, `fetchData2`, `fetchData3` are independent promises with
//     different delays and outcomes.
//   - `Promise.all([fetchData1, fetchData2])` resolves with the array of
//     resolved values since both succeed.
//   - `Promise.all([fetchData1, fetchData2, fetchData3])` rejects because
//     `fetchData3` fails after only 500 ms.
// • Validation:
//   The console prints the array `['data1 fetched', 'data2 fetched']` for
//   the first call, and the message "All data failed to fetch: data3 failed
//   to fetch" for the second.
// ============================================================================

const fetchData1 = new Promise((resolve) => setTimeout(() => resolve("data1 fetched"), 1000));
const fetchData2 = new Promise((resolve) => setTimeout(() => resolve("data2 fetched"), 2000));
const fetchData3 = new Promise((_, reject) => setTimeout(() => reject("data3 failed to fetch"), 500));

Promise.all([fetchData1, fetchData2])
    .then((results) => console.log("all success:", results))
    .catch((error) => console.log("error:", error));

Promise.all([fetchData1, fetchData2, fetchData3])
    .then((results) => console.log("all success:", results))
    .catch((err) => console.log("All data failed to fetch:", err));

// ============================================================================
// Task: Promise.allSettled
// ============================================================================
// • Definition:
//   `Promise.allSettled` is the "no-fail" cousin of `Promise.all`. It waits
//   for every promise to finish — whether it fulfilled or rejected — and
//   returns an array describing each result. It never rejects.
// • Objective:
//   Inspect the outcome of three mixed-result promises without any branch
//   failing the whole call.
// • Implementation:
//   - `Promise.allSettled([fetchData1, fetchData2, fetchData3])` produces an
//     array of `{ status, value | reason }` objects, one per input.
//   - There is no `.catch` because `allSettled` never rejects.
// • Validation:
//   The console prints three objects: two with `status: "fulfilled"` and
//   their values, plus one with `status: "rejected"` and its reason.
// ============================================================================

Promise.allSettled([fetchData1, fetchData2, fetchData3])
    .then((results) => console.log("all settled:", results))
    .catch((err) => console.log("All data failed to fetch:", err));

// ============================================================================
// Task: Promise.race
// ============================================================================
// • Definition:
//   `Promise.race` settles as soon as the **first** input promise settles
//   (either fulfilled or rejected). The "winner" determines the outcome. It
//   is ideal for timeouts: race a slow request against a timer that rejects
//   after a fixed duration.
// • Objective:
//   Race a "fast" server against a "slow" one to see the fast response win,
//   and then race a working server against a broken one to see the failure
//   path.
// • Implementation:
//   - `fastServer` resolves after 2 s; `slowServer` resolves after 5 s.
//   - `Promise.race([fastServer, slowServer])` resolves with the fast
//     server's value because it finishes first.
//   - `Promise.all([fastServer, brokenServer])` rejects after 3 s because
//     the broken server rejects first.
// • Validation:
//   The console prints "fast server response" for the race, and "error:
//   broken server Response" for the failure case.
// ============================================================================

const fastServer = new Promise((resolve) => setTimeout(() => resolve("fast server response"), 2000));
const slowServer = new Promise((resolve) => setTimeout(() => resolve("slow server response"), 5000));
const brokenServer = new Promise((_, reject) => setTimeout(() => reject("broken server Response"), 3000));

Promise.race([fastServer, slowServer])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

Promise.all([fastServer, brokenServer])
    .then((res) => console.log(res))
    .catch((err) => console.log("error:", err));

// ============================================================================
// Task: async / await Basics
// ============================================================================
// • Definition:
//   `async`/`await` is syntactic sugar over promises. An `async` function
//   always returns a promise, and `await` pauses execution inside the
//   function until the awaited promise resolves. The result reads like
//   synchronous code but is fully asynchronous.
// • Objective:
//   Show how a small async function is defined, how it returns a promise
//   automatically, and how `await` waits for a delay-based promise.
// • Implementation:
//   - `async function greet() { return "Hello!"; }` is equivalent to
//     returning `Promise.resolve("Hello!")`.
//   - `greet().then(...)` consumes the async result the same way as a
//     regular promise.
//   - `runTask()` uses `await delay()` to pause for 2 seconds, then prints
//     the result and a "Finished!" message.
// • Validation:
//   The console prints "Hello!", then "Starting...", then "Data loaded",
//   then "Finished!" in that order.
// ============================================================================

async function greet() {
    return "Hello!";
}

// Consuming it like a standard promise
greet().then((message) => console.log(message)); // Logs: "Hello!"

const delay = () => new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 2000));

async function runTask() {
    console.log("Starting...");
    // Execution pauses here for 2 seconds
    const result = await delay();
    console.log(result); // Logs: "Data loaded"
    console.log("Finished!");
}

runTask();

// ============================================================================
// Task: Sequential async / await
// ============================================================================
// • Definition:
//   When each step depends on the previous one's result, you can use
//   sequential `await`s. Unlike `Promise.all`, the steps happen one after
//   the other, which is exactly what you want for chained lookups.
// • Objective:
//   Fetch a roll number, then use it to fetch the matching student data —
//   step 2 cannot begin until step 1 finishes.
// • Implementation:
//   - `getRollNumber()` resolves with `1010` after 2 seconds.
//   - `getStudentData(rollNumber)` resolves with a student object that
//     includes the roll number.
//   - `runStudentTask()` awaits each call in turn and logs the final object.
// • Validation:
//   After ~4 seconds the console prints
//   `{ name: 'saksham', role: 'developer', rollNumber: 1010 }`.
// ============================================================================

function getRollNumber() {
    return new Promise((resolve) => setTimeout(() => resolve(1010), 2000));
}

function getStudentData(rollNumber) {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ name: "saksham", role: "developer", rollNumber }), 2000)
    );
}

async function runStudentTask() {
    const rollNumber = await getRollNumber();
    const studentData = await getStudentData(rollNumber);
    console.log(studentData);
}

runStudentTask();

// ============================================================================
// Task: Convert a Promise Chain to async / await
// ============================================================================
// • Definition:
//   Real APIs use the `fetch` function, which returns a promise. Wrapping a
//   `fetch` call in `async`/`await` with `try`/`catch`/`finally` gives you
//   the same readability as a synchronous block, with full error handling.
// • Objective:
//   Call a real public API (jsonplaceholder), parse the JSON, and log the
//   user object — handling network errors gracefully.
// • Implementation:
//   - `await fetch(url)` waits for the HTTP response.
//   - `if (!response.ok)` throws on non-2xx status codes so the catch block
//     runs.
//   - `await response.json()` parses the body into a JS object.
//   - `try`/`catch`/`finally` mirrors the earlier promise example: success
//     log, error log, and "operation complete" regardless of outcome.
// • Validation:
//   On success the console prints the full user object followed by
//   "operation complete". On any failure, the catch block logs the error
//   and "operation complete" still prints.
// ============================================================================

async function getuserdata(userToken) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userToken}`);
        if (!response.ok) {
            throw new Error(`http error! ${response.status}`);
        }
        const data = await response.json();
        console.log("user data:", data);
    } catch (error) {
        console.error("Failed to fetch user data:", error);
    } finally {
        console.log("operation complete");
    }
}

getuserdata(1);

// ============================================================================
// Task: Custom Error Handling
// ============================================================================
// • Definition:
//   Built-in `Error` is enough for generic problems, but real applications
//   often need domain-specific errors that carry extra information. Extending
//   `Error` lets you create a dedicated class that callers can recognise
//   with `instanceof`.
// • Objective:
//   Define an `insufficientFund` error, throw it when a withdrawal exceeds
//   the balance, and handle it separately from generic errors.
// • Implementation:
//   - `class insufficientFund extends Error` stores the balance, attempted
//     withdrawal amount, a numeric error code, and an `isOperational` flag
//     so the caller can branch on the error type.
//   - `withdrawMoney` throws the custom error when the amount is too large.
//   - The surrounding `try`/`catch` uses `instanceof insufficientFund` to
//     print a friendly message and the error code, with a fallback for
//     unexpected errors.
// • Validation:
//   With a balance of 50 and a withdrawal of 100, the console prints
//   "transaction failed: attempted to withdraw 100, but balance is only 50"
//   followed by "error code 101".
// ============================================================================

class insufficientFund extends Error {
    constructor(balance, withdrawAmount) {
        // super sets the error message to the error constructor
        super(`attempted to withdraw ${withdrawAmount}, but balance is only ${balance}`);
        this.name = "insufficientFund";
        this.ErrorCode = 101;
        this.isOperational = true; // set to true if the error is operational
    }
}

function withdrawMoney(amount, account) {
    if (amount > account.balance) {
        throw new insufficientFund(account.balance, amount);
    }
    account.balance -= amount;
    return account.balance;
}

try {
    const userAccount = { balance: 50 };
    withdrawMoney(100, userAccount);
    console.log(userAccount);
} catch (error) {
    if (error instanceof insufficientFund) {
        console.log(`transaction failed: ${error.message}`);
        console.log("error code", error.ErrorCode);
    } else {
        console.error("unexpected error", error);
    }
}