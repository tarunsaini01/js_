// ============================================================================
// Task: Basic Array Operations
// ============================================================================
// • Definition:
//   This section demonstrates the most fundamental array operations in
//   JavaScript — creating an array, adding elements (push), removing elements
//   (pop), accessing items by index, and measuring the array's length.
//   These operations form the foundation of almost every list-based task in
//   JS, so mastering them early avoids confusion later when working with more
//   complex data structures.
// • Objective:
//   The user should be able to confidently create an array, mutate it using
//   push/pop, read individual values via bracket notation, and determine the
//   number of elements stored.
// • Implementation:
//   - `push(11)` appends the value 11 to the end of the array.
//   - `pop(1)` removes the last element (the argument inside `pop` is ignored
//     — pop always removes the last item, never by index).
//   - `arr[5]` reads the element at index 5.
//   - `arr.length` returns the total count of elements.
// • Validation:
//   Running the file logs the mutated array, the element at index 5, and the
//   array length — confirming that mutations and reads worked as expected.
// ============================================================================

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.push(11);
arr.pop(1);
console.log(arr);
console.log(arr[5]);
console.log(arr.length);

// ============================================================================
// Task: Array Slicing
// ============================================================================
// • Definition:
//   The `slice()` method produces a shallow copy of a portion of an array
//   without modifying the original. It is essential when you need a subset
//   of an array for further processing.
// • Objective:
//   Demonstrate how `slice(start, end)` extracts elements from index `start`
//   up to (but not including) `end`, returning a new array.
// • Implementation:
//   `arr.slice(3, 7)` returns `[4, 5, 6, 7]` (elements at indices 3, 4, 5, 6).
// • Validation:
//   The sliced array `arr2` is printed to the console to confirm the subset.
// ============================================================================

var arr2 = arr.slice(3,7);
console.log(arr2);

// ============================================================================
// Task: Iterating Over Arrays
// ============================================================================
// • Definition:
//   Iteration is the act of visiting every element in a collection. This
//   task compares the three most common approaches in JavaScript:
//     1. `forEach` — built-in iteration with a callback.
//     2. classic `for` loop — gives full control with an index counter.
//     3. `map` — also iterates element-by-element (returns a new array).
// • Objective:
//   Show that all three techniques produce identical output (each element on
//   its own line) so the learner can pick the right one for their situation.
// • Implementation:
//   - `forEach` calls the supplied callback once per element.
//   - The `for` loop manually walks from index 0 to `arr.length - 1`.
//   - `map` is normally used to build a new array; here we use it purely for
//     its side effect of logging each element.
// • Validation:
//   Each technique prints every value of `arr` to the console.
// ============================================================================

arr.forEach((element) => {
    console.log(element);
})

for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.map((dets) => {
    console.log(dets);
})

// ============================================================================
// Task: Basic Loop Constructs
// ============================================================================
// • Definition:
//   Loops are used to repeat actions. This section demonstrates three classic
//   patterns: a counting `for` loop, a counting `while` loop, and a
//   conditional `for` loop that filters values during iteration.
// • Objective:
//   Print numbers 1–50 using a `for` loop, print 50–1 using a `while` loop,
//   and print every even number between 0 and 99.
// • Implementation:
//   - `for(i=0;i<=50;i++)` walks the range [0, 50] inclusive.
//   - `var i = 50; while(i>0)` decrements `i` until it reaches 1.
//   - `if(i%2==0)` filters out odd values using the modulo operator.
// • Validation:
//   Each loop logs its respective sequence to the console.
// ============================================================================

for(i=0;i<=50;i++){
    console.log(i);
}
var i = 50;
while(i>0){
    console.log(i);
    i--;
}
for(i=0;i<100;i++){
    if(i%2==0){
        console.log(i);
    }
}

// ============================================================================
// Task: Iterating Object Properties with `for...in`
// ============================================================================
// • Definition:
//   While arrays use numeric indexes, plain JavaScript objects use string
//   keys. The `for...in` loop visits every enumerable property name of an
//   object.
// • Objective:
//   Show how to enumerate the keys of a plain object and access the
//   matching values via bracket notation.
// • Implementation:
//   `for (i in arr4)` assigns each key (e.g. "user", "age") to `i`, and
//   `arr4[i]` reads the corresponding value.
// • Validation:
//   The console prints the user name and age defined on the object.
// ============================================================================

var arr4 = {
    user:"saksham",
    age:20,
}

for(i in arr4){
    console.log(arr4[i]);
}

// ============================================================================
// Task: Object Creation and Property Access
// ============================================================================
// • Definition:
//   JavaScript objects group related data using key/value pairs. This section
//   covers creation, dot-access, bracket-access, and the `Object.*` helpers.
// • Objective:
//   Demonstrate the multiple ways to read an object's data and inspect its
//   structure using built-in static methods.
// • Implementation:
//   - `obj.name` uses dot notation (preferred when the key is known).
//   - `obj["name"]` uses bracket notation (required for dynamic keys).
//   - `Object.keys/values/entries` produce arrays of keys, values, and
//     `[key, value]` pairs respectively.
//   - `Object.dets` is a typo that simply returns `undefined` — left in
//     intentionally as a teaching moment about invalid access.
// • Validation:
//   The console logs each property using both notations plus the result of
//   each `Object.*` helper.
// ============================================================================

var obj ={
    name: "saksham",
    email: "2w4oJ@example.com",
    age:20,
}

console.log(obj.name);
console.log(obj.email);
console.log(obj.age);
console.log(obj["name"]);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.dets)

// ============================================================================
// Task: Mutating and Copying Objects
// ============================================================================
// • Definition:
//   Objects in JavaScript are mutable references. This section shows two
//   ways to add or update properties and how the spread operator (`...`)
//   creates a shallow copy in a single expression.
// • Objective:
//   Teach direct property mutation (dot/bracket assignment) alongside the
//   more declarative spread-syntax approach for cloning/merging objects.
// • Implementation:
//   - `user.age = 20` adds a new `age` property to the existing object.
//   - `user["address"] = "delhi"` adds a property using bracket notation.
//   - `{ ...user, address: "delhi" }` builds a brand-new object that copies
//     every key from `user` and overrides `address`.
//   - `{ ...user, address: "bombay", occupation: "developer" }` adds an
//     additional key while also overriding `address`.
// • Validation:
//   Each updated object is logged so the new shape can be inspected.
// ============================================================================

let user = {
    name: "saksham",
};

user.age = 20;
console.log(user);

user["address"] = "delhi";
console.log(user);

let updateUser = { ...user, address: "delhi" };
console.log(updateUser);

let updateUser1 = { ...user, address: "bombay", occupation: "developer"};
console.log(updateUser1);

// ============================================================================
// Task: Nested Objects and Destructuring
// ============================================================================
// • Definition:
//   Real-world data is rarely flat — it is usually nested several levels
//   deep. This task shows how to read deeply nested values using both dot
//   and bracket notation, optional chaining (`?.`), and destructuring.
// • Objective:
//   Make the learner comfortable accessing any depth of nested data and
//   pulling multiple values out at once via destructuring.
// • Implementation:
//   - `class1.student1.performance.marks` — chained dot access.
//   - `class1["student1"]["performance"]["grade"]` — chained bracket access.
//   - `class1.student1?.name` — optional chaining protects against missing
//     intermediate properties.
//   - `const { student1: { name, age, performance: { marks, grade } } } =
//     class1` — destructuring pulls the desired values into local constants.
// • Validation:
//   The console prints every accessed value, including the destructured
//   locals `name`, `age`, `marks`, and `grade`.
// ============================================================================

var class1 = {
    student1:{
        name:"saksham",
        age:20,
        performance:{
            marks:90,
            grade:"A"
        }
    },
    student2:{
        name:"rahul",
        age:21
    }
}

console.log(class1.student1.performance.marks);
console.log(class1.student2.name);
console.log(class1["student1"]["performance"]["grade"]);
console.log(class1.student1?.name);
const { student1: {name,age,performance:{marks,grade}} } = class1;
console.log(name);
console.log(age);
console.log(marks);
console.log(grade);

// ============================================================================
// Task: Find the Largest Number in an Array
// ============================================================================
// • Definition:
//   One of the most common interview-style problems: given a list of
//   numbers, return the highest value. The algorithm must traverse the list
//   and keep track of the largest element seen so far.
// • Objective:
//   Build an array of 50 random numbers (0–499) and determine the maximum
//   value using a simple linear scan.
// • Implementation:
//   - `Math.random() * 500` generates a float in [0, 500).
//   - `Math.floor(...)` truncates to an integer in [0, 499].
//   - We start with `max = arr[0]` and walk every element with `forEach`,
//     updating `max` whenever a bigger value is found.
// • Validation:
//   The console prints the generated array followed by the computed maximum.
// ============================================================================

var arr =[] ;
for(i=0;i<50;i++){
    arr.push(Math.floor(Math.random()*500));
}
console.log(arr);
var max = arr[0];
arr.forEach((elem) => {
    if(elem>max){
        max = elem;
    }
})
console.log(max);

// ============================================================================
// Task: Find the Smallest Number in an Array
// ============================================================================
// • Definition:
//   The mirror image of the previous task: locate the minimum value in a
//   numeric list using the same single-pass approach.
// • Objective:
//   Produce a random array and identify its smallest element.
// • Implementation:
//   Identical to the "largest" routine except the comparison flips to
//   `elem < max` (here the variable is misleadingly named `max` — it ends
//   up holding the minimum).
// • Validation:
//   The console logs the array followed by the smallest value found.
// ============================================================================

var arr =[] ;
for(i=0;i<50;i++){
    arr.push(Math.floor(Math.random()*500));
}
console.log(arr);
var max = arr[0];
arr.forEach((elem) => {
    if(elem<max){
        max = elem;
    }
})
console.log(max);

// ============================================================================
// Task: Sum All Elements in an Array
// ============================================================================
// • Definition:
//   Aggregation problems (sum, average, product) are the bread and butter
//   of data processing. Summing an array reduces it to a single scalar
//   value.
// • Objective:
//   Add every element of a randomly generated array and print the total.
// • Implementation:
//   An accumulator `sum` starts at 0. The `forEach` callback adds each
//   element to `sum`, yielding the running total at the end.
// • Validation:
//   The console prints the array and the final sum.
// ============================================================================

var arr =[] ;
for(i=0;i<50;i++){
    arr.push(Math.floor(Math.random()*500));
}
console.log(arr);

var sum =0;
arr.forEach((elem) => {
    sum += elem;
})
console.log(sum);

// ============================================================================
// Task: Count and Sum Even Numbers in an Array
// ============================================================================
// • Definition:
//   Combining counting and summing is a frequent analytics task: tally the
//   number of items that match a predicate (even) and compute their total.
// • Objective:
//   Walk a random array once, counting every even number and accumulating
//   the sum of those even numbers.
// • Implementation:
//   - The modulo operator `%` distinguishes even (`elem % 2 === 0`) from
//     odd numbers.
//   - On each match, `count` is incremented and the matching element is
//     added to `sum`.
// • Validation:
//   The console prints the array, the count of evens, and the sum of evens.
// ============================================================================

var arr =[] ;
for(i=0;i<50;i++){
    arr.push(Math.floor(Math.random()*500));
}
console.log(arr);

count =0;
sum =0;
arr.forEach((elem) => {
    if(elem %2 == 0){
        count++;
        sum += elem;
    }
})
console.log(count);
console.log(sum);

// ============================================================================
// Task: Inspecting Object Keys and Values
// ============================================================================
// • Definition:
//   When you receive an object from an API or another module, you often
//   need to enumerate its keys and values without knowing them in advance.
//   The `Object.*` static helpers make this trivial.
// • Objective:
//   Demonstrate `Object.keys`, `Object.values`, and `Object.entries` against
//   a small object literal.
// • Implementation:
//   - `Object.keys(obj)` returns an array of every enumerable property name.
//   - `Object.values(obj)` returns an array of the corresponding values.
//   - `Object.entries(obj)` returns an array of `[key, value]` pairs.
// • Validation:
//   All three helpers print their respective arrays to the console.
// ============================================================================

var obj = {
    name:"saksham",
    age:20,
    address:"delhi",
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));