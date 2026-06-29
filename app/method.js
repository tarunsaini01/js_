// ============================================================================
// Task: Comparing `forEach` and `map`
// ============================================================================
// • Definition:
//   `forEach` and `map` are both array iterators, but they differ in
//   purpose: `forEach` exists purely for its side effects and returns
//   `undefined`, while `map` returns a brand-new array containing the values
//   returned by its callback. Understanding this distinction avoids bugs
//   where developers expect a transformed array but get `undefined` instead.
// • Objective:
//   Show that both methods can be used to walk a numeric array and that the
//   callback receives `(value, index)` — the index is useful when the
//   position of each item matters (e.g. when labelling output).
// • Implementation:
//   - Two parallel calls iterate over the same numeric array with `forEach`
//     and `map`, logging each element on its own line.
//   - A second pair iterates over an array of fruit strings, also printing
//     the index alongside the value to highlight that the second callback
//     argument is the array index.
// • Validation:
//   Running the file prints every element twice — once via `forEach`, once
//   via `map` — and the fruit arrays also include the index for clarity.
// ============================================================================

//for Each
var arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach((elem) => {
    console.log(elem);
});

//map
var arr = [1,2,3,4,5,6,7,8,9,10];
arr.map((elem) => {
    console.log(elem);
});

const fruits = [ " apple ", "bananna ","mango "];

fruits.forEach((fruits, index) =>{
    console.log(index,fruits);
});

const fruity = [ " apple ", "bananna ","mango "];

fruity.map((fruits, index) =>{
    console.log(index,fruits);
});

// ============================================================================
// Task: Transforming Arrays with `map`
// ============================================================================
// • Definition:
//   `map` is the canonical tool for deriving a new array from an existing
//   one without mutating the original. This is one of the most-used
//   functional patterns in modern JavaScript.
// • Objective:
//   Produce a new array where every number has been incremented by 1,
//   leaving the original `numbers` array untouched.
// • Implementation:
//   `numbers.map(num => num + 1)` returns `[2, 3, 4]`. The arrow function is
//   the transformation rule; the original array is not modified.
// • Validation:
//   The console logs both the transformed array and the original array so
//   the user can verify immutability of the source.
// ============================================================================

// map
const numbers = [1,2,3];
const double = numbers.map(num => num+1);
console.log(double);
console.log(numbers);

// ============================================================================
// Task: Filtering Arrays with `filter`
// ============================================================================
// • Definition:
//   `filter` returns a new array containing only the elements that pass a
//   supplied predicate. It is the cleanest way to remove unwanted items
//   from a list without manually building a new array with `push`.
// • Objective:
//   Build a new array consisting solely of even numbers from a 1–10 list.
// • Implementation:
//   The predicate `age % 2 === 0` keeps values 2, 4, 6, 8, and 10. The
//   result is stored in `even` and printed.
// • Validation:
//   The console prints `[2, 4, 6, 8, 10]`, confirming only even values were
//   retained.
// ============================================================================

//filter
const ages =[1,2,3,4,5,6,7,8,9,10];
const even = ages.filter(function(age){
    return age%2 ==0 ;
})
console.log(even);

// ============================================================================
// Task: Locating an Object with `find`
// ============================================================================
// • Definition:
//   `find` returns the first element that satisfies a predicate (or
//   `undefined` if none match). It is most useful with arrays of objects,
//   where the predicate usually checks a specific property (id, name, etc.).
// • Objective:
//   Retrieve the student whose `id` is 2 from an array of student objects.
// • Implementation:
//   `students.find(student => student.id == 2)` returns the second element
//   of the array — `{ id: 2, name: "sawan" }`.
// • Validation:
//   The matched student object is logged to the console.
// ============================================================================

// find()
const students = [
    {id:1 , name:"saksham"},{id:2 , name:"sawan"},{id:3 , name:"rahukl"}
]

const userfind = students.find(student => student.id == 2);
console.log(userfind);

// ============================================================================
// Task: Locating an Index with `findIndex`
// ============================================================================
// • Definition:
//   `findIndex` is similar to `find` but returns the **position** of the
//   first match rather than the element itself. This is handy when you need
//   to update or remove the element from the original array.
// • Objective:
//   Find the index of the first score greater than 50.
// • Implementation:
//   `scores.findIndex(score => score > 50)` walks the array and returns
//   `3` — the index of `62`.
// • Validation:
//   The console prints `3`, confirming the correct index.
// ============================================================================

// findIndex() -- gives the index to the element that satisfy the consdition
const scores = [45,50,48,62,58];
const firstAIndex = scores.findIndex(score => score > 50 );
console.log(firstAIndex);

// ============================================================================
// Task: Testing Membership with `some`
// ============================================================================
// • Definition:
//   `some` returns `true` if at least one element satisfies the predicate.
//   It short-circuits on the first match, making it efficient for large
//   arrays where you only need to know whether a match exists.
// • Objective:
//   Determine whether any score exceeds 100.
// • Implementation:
//   `score.some(score => score > 100)` walks the array; since no element
//   exceeds 100, it returns `false`.
// • Validation:
//   The console prints `false`, confirming no matches were found.
// ============================================================================

// some -- gives true or false
const score = [45,50,48,62,58];
const firstIndexb = score.some(score => score > 100);
console.log(firstIndexb);

// ============================================================================
// Task: Verifying All Elements with `every`
// ============================================================================
// • Definition:
//   `every` is the dual of `some`: it returns `true` only if **all**
//   elements satisfy the predicate. Like `some`, it short-circuits on the
//   first failing value.
// • Objective:
//   Check whether every number in `tarun` is even.
// • Implementation:
//   `tarun.every(tarun => tarun % 2 === 0)` evaluates each element; the
//   array contains odd numbers, so the result is `false`.
// • Validation:
//   The console prints `false`, confirming at least one element failed the
//   predicate.
// ============================================================================

// every -- gives true or false tells whether all the elements pass the test or not
const tarun = [ 12,58,48,62,58];

const sawan = tarun.every(tarun => {return tarun%2 == 0});
console.log(sawan);

// ============================================================================
// Task: Reducing Arrays to a Single Value with `reduce`
// ============================================================================
// • Definition:
//   `reduce` collapses an array into a single value by repeatedly applying
//   a reducer callback. It is the most general of the iteration helpers
//   and can implement sums, products, max/min, grouping, and much more.
// • Objective:
//   Multiply every expense in the array together using a reducer.
// • Implementation:
//   The reducer takes `(total, expense)` and returns `total * expense`,
//   yielding `100 * 200 * 300 * 400 * 500`.
// • Validation:
//   The console prints the final product.
// ============================================================================

// reduce
const expense = [100,200,300,400,500];
const total =expense.reduce((total,expense) => {
    return total * expense;
})

console.log(total);

// ============================================================================
// Task: Object Destructuring
// ============================================================================
// • Definition:
//   Destructuring is a concise syntax for pulling multiple properties out
//   of an object (or array) into distinct local variables in a single
//   statement.
// • Objective:
//   Extract `firstname`, `lastname`, and `age` from the `user` object.
// • Implementation:
//   `const { firstname, lastname, age } = user` declares three constants
//   whose values come from the matching keys on `user`.
// • Validation:
//   The console prints all three values in a single line.
// ============================================================================

// object destructuring
const user  = { firstname : "saksham", lastname : "Goel", age : 20};
const{firstname,lastname,age} = user;
console.log(firstname,lastname,age);

// ============================================================================
// Task: Inspecting Object Shape with `Object.keys/values/entries`
// ============================================================================
// • Definition:
//   When a configuration object is passed into a function, you often need
//   to enumerate its keys, values, or key-value pairs to perform
//   validation, merging, or logging.
// • Objective:
//   Demonstrate the three static helpers on a small settings object.
// • Implementation:
//   - `Object.keys(settings)` → array of property names.
//   - `Object.values(settings)` → array of values.
//   - `Object.entries(settings)` → array of `[key, value]` tuples.
// • Validation:
//   Each helper's result is printed to the console for inspection.
// ============================================================================

// object ketys and values
const settings = {theme : "dark ", font : "sans-serif"};
console.log(Object.keys(settings));
console.log(Object.values(settings));
console.log(Object.entries(settings));

// ============================================================================
// Task: Nested Objects and Optional Chaining
// ============================================================================
// • Definition:
//   Real-world data is often nested several levels deep. Accessing deeply
//   nested properties is straightforward with chained dot access, but
//   optional chaining (`?.`) is essential when intermediate properties
//   might be `undefined`.
// • Objective:
//   Walk a nested employee record, read several values with chained
//   access, destructure one nested value into a local variable, and
//   finally use optional chaining to safely read another.
// • Implementation:
//   - `emplyoee.contact.email` reads the email address.
//   - `emplyoee.contact.address.pincode` walks three levels deep.
//   - `const { contact: { address: { city } } } = emplyoee` destructures
//     `city` into a local constant.
//   - `emplyoee.contact?.address?.pincode` uses optional chaining to guard
//     against missing intermediate values.
// • Validation:
//   Each access is printed; the destructured `city` is also logged.
// ============================================================================

//nested objects
var emplyoee = {
    id : 101 ,
    name : "saksham",
    salary : 10000,
    contact : {
        phone : 1234567890,
        email : "saksham@.com",
        address: {
        city:"delhi",
        state : "new delhi",
        pincode : 110001,}

}

};

console.log(emplyoee.contact.email);
console.log(emplyoee.contact.address.pincode);
const {contact:{address:{city}}}= emplyoee;
console.log(city);

console.log(emplyoee.contact?.address?.pincode); //emplyoee.contact?.email?.address?.pincode;