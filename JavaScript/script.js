const Birthyear = 2003
console.log("I was born in " + Birthyear)

// Comparison operator
console.log(5 =="5")
console.log(5 === "5")

// Functions

function greet(){
    console.log("Hello am Michael")
}
greet()

// 2. use of a function expression
 const  Hello = function() {
    console.log("This is a function expression")
 }
Hello()

// 3. use of a modern arrow function
const Goodbye = () => console.log("Goodbye from this side,,this is a modern arrow function")
Goodbye()

// Parameters and return value

function multiply(a,b,c){
    return a*b*c
}

console.log(multiply(1,2,3))