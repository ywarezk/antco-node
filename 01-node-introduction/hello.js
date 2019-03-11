
// print to stdout
console.log("hello world");

// activate code in the future

// did it halt here?

let myHello = "this code will run in the future";
const myHello2 = 'hello 2 from variable';

// this variable will live inside of the function
var helloWorld3 = `
    i can write multiple lines of 
    text here
    i can also ${1 + 1} concat variables with ${myHello} 
`

// scope - where does this variable lives
if (myHello.length > 5) {
    let myStam = 10;
    const stamNumer = 20.5;
    //error!
    //stamNumer = "dfgdf";


}

function hello() {

    if (true) {
        var stam = "stam string"
    }
    console.log(stam);

}

// error
//myStam = "dfgd";


setTimeout(function () {
    hello();
    console.log(myHello);
    console.log(myHello2);
    console.log(helloWorld3);
}, 1000);

console.log("script finished");