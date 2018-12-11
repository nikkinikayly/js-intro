var pDemo = document.getElementById("demo")
var imageSrc = document.getElementById("img")
pDemo.innerHTML = "hello world";
// document.getElementsByClassName("demo2").innerHTML = "wassup";
// document.getElementsByTagName("p").innerHTML = "yo yo yo";
imageSrc.src = "https://images.unsplash.com/photo-1544273677-c433136021d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
pDemo.style.color = "red"
// event handlers
// onclick=js
// element.addEventListener(event, function, useCapture)
// element.addEventListener("click" function () {
//     do something
// })
// element.addEventListener("click", myFunction)
//     function myFunction(){
//     do something
// }
// var colors = ["red", "green", "blue", "orange", "#0Dff9a", "white"]
// var btn = document.getElementById("btn")
// btn.addEventListener("click", changeColor)

// function changeColor() {
//     document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
//     pDemo.style.color = colors[Math.floor(Math.random()*colors.length)]
// }


// Scope

// var foo = 'bar'; // global variable
// function someFunction(params1, params2) {
    // params1 and 2 are local variables
    // var bar = 'foo' // local variable
// }
// function myFunction() {
    // debugger
    // console.log(bar) // error
    // console.log(foo) // bar
// }

// function whatIsThis() {
    // baz = "what variable is this"
// }

// whatIsThis()

// console.log(baz)

// myFunction()

// object
    // arrays, hashes, function, classes
    // window object - what the user sees
        // window
            // global
            // function calls
            // anything below that

// datatypes
    // string, booleans, numbers, null, undefined, symbol
var num = 23
console.log(this.num)
console.log(this)

var person = {
    firstName: 'bob',
    lastName: 'smith', 
    func: function(){
        return this.firstName + " " + this.lastName
    }
}
console.log(person.func())