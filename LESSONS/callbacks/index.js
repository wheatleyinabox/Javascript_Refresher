// callback -> a function that is passed as an argument
//             to another function

//             used to handle asynchonous operations:
//              1. Reading a file
//              2. Network requests
//              3. Interacting wtih databases

// "Hey, when you're done call this next!"



// EXAMPLE 1
hello(wait);

function hello(callback)
{
    // what if hello takes time to process?
    // setTimeout(function () 
    // {
    //     console.log("Hello!");
    // }, 3000);

    console.log("Hello!");
    callback();
}

function wait()
{
    console.log("Wait!");
}

function leave()
{
    console.log("Leave!");
}

function goodbye()
{
    console.log("Goodbye!");
}



// EXAMPLE 2
sum(displayConsole, 5, 5);
sum(displayDOM, 5, 5);

function sum(callback, x, y)
{
    let result = x + y;
    callback(result);
}

function displayConsole(result)
{
    console.log(result);
}   

function displayDOM(result)
{
    document.getElementById("header").textContent = result;

}