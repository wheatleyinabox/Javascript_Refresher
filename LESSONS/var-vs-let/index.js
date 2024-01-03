// let -> variables limited to block scope {}
// var -> variables limited to a function(){}

// *****IF A VAR IS GLOBAL...
//          CAN MESS WITH BROWSER WINDOW PROPS!!!
//
// Ex. var name = "Wheat"; // as a global
//
// - Will change Window property name, and not create
//   a new variable name

doSomething();

function doSomething() // stays in the function()
{
    for (var i = 1; i <= 3; i++)
    {
        console.log(i);
    }
}

console.log(i);