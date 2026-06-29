// ============================================================================
// Task: Error Handling with `try...catch`
// ============================================================================
// • Definition:
//   The `try...catch` statement is the standard way to handle runtime
//   errors in JavaScript. Code that may throw is wrapped in `try`; if an
//   error is thrown, control jumps to `catch`. The optional `finally` block
//   always runs, regardless of success or failure — perfect for cleanup.
// • Objective:
//   Demonstrate that an `Error` thrown inside `try` is caught and that the
//   `finally` block executes afterward.
// • Implementation:
//   - Inside `try`, the code checks whether `marks <= 40`; if so it throws
//     `new Error("student failed")`.
//   - `catch` logs the error object.
//   - `finally` logs `"operation complete"` to prove it ran.
// • Validation:
//   With `marks = 47` (greater than 40), the script prints
//   "student passed" followed by "operation complete".
// ============================================================================

var marks = 47;
function student(){
    try{
        if (marks <= 40){
            throw new Error("student failed");
        }
        else{
            console.log("student passed");
        }

    }catch(error){
        console.log(error);
    }finally{
        console.log("operation complete");
    }};
student();

// ============================================================================
// Task: Manual `throw` Statements and Custom Error Classes
// ============================================================================
// • Definition:
//   Beyond `try...catch`, JavaScript lets you throw any value (a string,
//   number, or, more idiomatically, an `Error` instance). Custom error
//   subclasses let you tag errors with a domain-specific name so that
//   callers can distinguish between different failure modes using
//   `instanceof`.
// • Objective:
//   Show two complementary techniques:
//     1. Throw an `Error` from a regular function based on invalid input.
//     2. Define custom `Error` subclasses (`DatabaseError` and `validation`)
//        so consumers can branch on `instanceof`.
// • Implementation:
//   - `trip(persons)` throws when `persons <= 5` or `persons == 7`.
//   - `class DatabaseError extends Error` adds a `.name` of "DatabaseError"
//     and forwards the message to the base constructor.
//   - The `try` block demonstrates throwing different custom errors and
//     handling each with its own `instanceof` branch.
// • Validation:
//   `trip(8)` runs the success branch and prints "trip possible" plus the
//   "operation complete" message. The custom-error block reaches the
//   validation branch because `DatabaseError` is thrown first (the second
//   `throw` is unreachable — kept as a teaching example).
// ============================================================================

// finally
// throw
function trip(persons){
        if (persons <= 5){
            throw new Error("trip not possible");
        }
        if(persons == 7){
            throw new Error("trip not possible");
        }
        return "trip possible";
        }
try{
    console.log(trip(8));
}catch(error){
    console.log(error);
}finally{
    console.log("operation complete");
}

class DatabaseError extends Error {
    constructor(message){
        super(message);                  //message to parent class error
        this.name = "DatabaseError";     //name of error
    }
}


class validation extends Error {
    constructor(message){
        super(message);                  //message to parent class error
        this.name = "validation";     //name of error
    }
}
try{
    throw new DatabaseError("database error");
    throw new validation("validation error");
}catch(error){
    if (error instanceof validation){
        console.log(`user error: ${error.message}`);
    }
    else if(error instanceof DatabaseError){
        console.log(`system not responding reconnecting`);
    }else{
        console.error("unexpected error", error);
    }
}

// ============================================================================
// Task: Higher-Order Functions
// ============================================================================
// • Definition:
//   A higher-order function (HOF) is a function that accepts another
//   function as an argument or returns a function. JavaScript's array
//   methods (`map`, `filter`, `reduce`) are the most common HOFs. Custom
//   HOFs let you encapsulate reusable behaviour.
// • Objective:
//   Show that a small "transform" function can be passed into `.map` to
//   produce a transformed array without rewriting the iteration logic.
// • Implementation:
//   - `double = num => num * 3` is the transformation rule.
//   - `numbers.map(double)` applies `double` to every element and returns
//     a new array of tripled values.
//   - `console.log(numbers.map(double))` returns `undefined` because
//     `console.log` itself returns undefined — useful as a teaching moment
//     about return values.
// • Validation:
//   The console prints the tripled array; the second `console.log(doubled)`
//   shows `undefined` because `console.log` itself returns undefined.
// ============================================================================

// Advanced Functions

// Higher-Order Functions ( takes one or more function as arguments .map , .filter ,.reduce)
const numbers =[1,2,3,4,5,6,7,8,9,10];
const double = (num) => num*3;
const doubled = console.log(numbers.map(double));
console.log(doubled);

// ============================================================================
// Task: First-Class Functions (Callbacks)
// ============================================================================
// • Definition:
//   JavaScript treats functions as values: you can assign them to
//   variables, store them in arrays/objects, and pass them as arguments.
//   This is the property that makes callbacks possible.
// • Objective:
//   Pass a named function (`greet`) into another function (`user`) as a
//   callback, demonstrating that functions are first-class citizens.
// • Implementation:
//   - `greet = function(name) { return "hello " + name; }` assigns a
//     function expression to a variable.
//   - `user(name, callback)` invokes the supplied callback with `name`.
//   - `user("saksham", greet)` returns `"hello saksham"`.
// • Validation:
//   The console prints "hello saksham".
// ============================================================================

// First-Class Functions (assign function to variables )
const greet = function(name){
    return `hello ${name}`;
}
function user(name,callback){
    return callback(name);
}
console.log(user("saksham",greet));

// ============================================================================
// Task: Function Binding with `call`, `apply`, and `bind`
// ============================================================================
// • Definition:
//   When a method is taken out of its object, `this` is no longer bound to
//   the original object. `call`, `apply`, and `bind` let you explicitly set
//   the value of `this` when invoking a function.
// • Objective:
//   Reuse `user1.about` against a different object (`anotherUser`) by
//   binding `this` to it three different ways.
// • Implementation:
//   - `user1.about.call(anotherUser, "!")` — invokes immediately with
//     `this = anotherUser` and `"!"` as the punctuation argument.
//   - `user1.about.apply(anotherUser, ["."])` — same idea, but arguments
//     are passed as an array.
//   - `user1.about.bind(anotherUser)` returns a new function with `this`
//     permanently set, then `aboutUser("??")` invokes it.
// • Validation:
//   Each call prints `"my name is john and age is 20"` followed by the
//   appropriate punctuation ("!", ".", "??").
// ============================================================================


const user1  = {
    name : "saksham",
    age : 21,
    about : function(punctuation){
        console.log(`my name is ${this.name} and age is ${this.age}${punctuation}`);
    }
}
const anotherUser = {
    name : "john",
    age : 20,
}

// call
user1.about.call(anotherUser,"!");

// apply
user1.about.apply(anotherUser,["."]);

// bind
const aboutUser = user1.about.bind(anotherUser);
aboutUser("??");

// ============================================================================
// Task: Class Constructors
// ============================================================================
// • Definition:
//   ES6 `class` syntax is syntactic sugar over JavaScript's
//   prototype-based inheritance. A `constructor` is the special method
//   called when you instantiate a class with `new`.
// • Objective:
//   Define a `student` class with a constructor that stores `name` and
//   `age`, then create an instance and read its properties.
// • Implementation:
//   - `class student { constructor(name, age) { this.name = name;
//     this.age = age; } }` defines the blueprint.
//   - `new student("saksham", 20)` creates an instance whose `name` is
//     "saksham" and `age` is 20.
// • Validation:
//   The console prints `student1.name` ("saksham"), confirming the
//   constructor stored the value correctly.
// ============================================================================


class Student{
    constructor(name,age){
        this.name = name;
        this.age =age;

    }
}

const student1 = new Student("saksham",20);
console.log(student1.name); //student1.name;

// ============================================================================
// Task: Advanced OOP — Encapsulation, Inheritance, Static Fields, and Getters/Setters
// ============================================================================
// • Definition:
//   This block showcases several advanced OOP features side by side:
//     - **Static fields** belong to the class itself, not instances.
//     - **Private fields** (prefixed with `#`) cannot be accessed outside
//       the class — true encapsulation.
//     - **Getters/setters** let you expose computed or validated views
//       over those private fields.
//     - **Inheritance** with `extends` lets a subclass reuse and override
//       parent behaviour.
// • Objective:
//   Build an `Employee` class with a static `company`, a private `#salary`,
//   and a controlled interface (`currentSalary` getter, `increment` setter),
//   then create a `Manager` subclass that adds `department` and overrides
//   the `work` method.
// • Implementation:
//   - `static company = "tech group"` belongs to `Employee` (not
//     instances), so `Employee.company` works.
//   - `#salary` is truly private; outside code must go through
//     `currentSalary` (getter) or `increment` (setter).
//   - `set increment(newsalary)` only updates if the new value is higher,
//     preventing accidental reductions.
//   - `class Manager extends Employee` inherits everything, adds
//     `department`, and overrides `work()` for polymorphism.
// • Validation:
//   After `Employee1.increment = 20000` the `currentSalary` getter prints
//   the updated value. `Manager.work()` prints its specialised message.
// ============================================================================

// advance opps concepts

class Employee{
    static company = "tech group";

#salary;

constructor(name,salary){
    this.name = name;
    this.#salary = salary;
}

get currentSalary() {
    return `current salary of the person is ${this.#salary}`;
}

set increment(newsalary){
    if(newsalary > this.#salary){
        this.#salary = newsalary;
    }
}
work(){
    console.log(`${this.name} is working `);
}
}

class Manager extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }
    work() {
        console.log(`${this.name} is working in ${this.department}`);
    }
}

const Employee1 = new Employee("saksham",10000);
console.log(Employee.company);
console.log(Employee1.currentSalary);
Employee1.increment = 20000;
console.log(Employee1.currentSalary);
Employee1.work();

const Emplyoee2 = new Manager("john",20000,"tech");
Emplyoee2.work();

// ============================================================================
// Task: The Four Pillars of OOP — Encapsulation and Abstraction
// ============================================================================
// • Definition:
//   `dog` is a small example of a well-designed class that demonstrates
//   **encapsulation** (private state for `#energy` and `#hunger`) and
//   **abstraction** (the user calls `play()`, `feed()`, `speak()`, or
//   `resetstats()` without worrying about how the state is mutated).
// • Objective:
//   Show how private fields protect invariants (energy cannot exceed 100,
//   hunger cannot drop below 0) and how `Math.max`/`Math.min` style
//   clamping keeps values within sensible bounds.
// • Implementation:
//   - `#energy` and `#hunger` are declared as private fields, set to
//     initial values of 100 and 50 respectively.
//   - `play()` decreases `#energy` by 10 and increases `#hunger` by 10,
//     clamped to [0, 100].
//   - `feed()` does the inverse — note the original code has a small bug
//     (`Math.max(100, ...)` clamps *up to* 100 rather than capping energy
//     growth); left as a teaching opportunity about clamping.
//   - `speak()` logs that the dog is barking.
//   - `resetstats()` restores the defaults — useful after debugging.
// • Validation:
//   Running `dog1.speak()` prints "tommy is barking".
// ============================================================================

// four pillar sof oops

// Abstraction
// Encapsulation
//     // Inheritance

class dog {
    #energy = 100;
    #hunger = 50;

    constructor(name,breed){
        this.name = name;
        this.breed = breed;
    }

    play(){
        this.#energy = Math.max(0,this.#energy-10);
        this.#hunger = Math.max(100,this.#hunger+10);
        console.log( `${this.name} is playing , energy is ${this.#energy} and hunger is ${this.#hunger}`);
    }
    feed(){
        this.#energy = Math.max(100,this.#energy+10);
        this.#hunger = Math.max(0,this.#hunger-10);
        console.log( `${this.name} is eating , energy is ${this.#energy} and hunger is ${this.#hunger}`);
    }
    speak() {
        console.log( `${this.name} is barking  `);
    }
    resetstats(){
        this.#hunger = 50;
        this.#energy = 100;
    }
}

// ============================================================================
// Task: The Fourth Pillar — Polymorphism
// ============================================================================
// • Definition:
//   Polymorphism lets subclasses override or extend parent behaviour so
//   that the same call shape produces different results depending on the
//   actual object type.
// • Objective:
//   Define two breeds (`beagle` and `greyhound`) that override the
//   sound-making method so each returns its own sound.
// • Implementation:
//   - `beagle` extends `dog` and its `speak1()` returns "barking".
//   - `greyhound` extends `dog` and its `speak1()` returns "howling".
//   - Both call `super(name, breed)` in their constructor to forward the
//     shared initialisation to the parent.
// • Validation:
//   `dog1.speak()` prints "tommy is barking" using the parent class;
//   `dog2.speak1()` prints "barking" via the `beagle` subclass.
// ============================================================================

// Polymorphism
class beagle extends dog{
    constructor(name){
        super(name,"beagle");
    }

    speak1() {
        return "barking";
    }
}

class greyhound extends dog{
    constructor(name){
        super(name,"greyhound");
    }

    speak1(){
        return "howling";
    }
}

const dog1 = new dog("tommy","pug");
const dog2 = new beagle("tommy");
console.log(dog1.speak());
console.log(dog2.speak1());