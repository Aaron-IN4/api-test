// // hello = function() {
// //     return "Hello World!";
// //   }

// // document.getElementById("demo").innerHTML = hello();
// // document.getElementById("demo").addEventListener("click", () => { 
// //     alert("Test");
// // });

let colorTest = document.getElementById("test-button")
colorTest.addEventListener("click", () => {
    let response = prompt("Type a color!");
    document.getElementById("myDIV").style.backgroundColor = response;
})
// document.getElementById("myDIV").style.backgroundColor = "lightblue";
// let addTwo = (a, b) => {
//     return a * b
// }
// document.getElementById("addtwo").innerHTML = addTwo(3, 9)

// function testFunction() {
//     alert("Hello world!")
// }
// document.getElementById("test-button").addEventListener("click", testFunction)
// button = document.getElementById("test-button")
// button.addEventListener("dblclick", (a, b) => {
//     alert("Goodbye world!")
//     a = 5;
//     b = 4;
//     console.log(a*b)
    
// })
