// Error -> an object that is created to represent a problem that occurs
//          Occur often when user input or establishing a connection

//          Ex. Network errors, promise rejection, security errors

// try { } -> Encloses code that might potentially cause an error
// catch { } -> Catch and handle any thrown Errors from try { }
// finally { } -> (optional) Always executes. Used mostly for clean up
//                Ex. close files, close connections, release resources



// EXAMPLE 1
try
{
    console.log("Hello!");
}
catch(error)
{
    console.log(error);
}
finally
{
    console.log("This always executes!");
}

console.log("You have reached the end!");



// EXAMPLE 2
try
{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0)
    {
        throw new Error("You can't divide by zero!");
    }
    if (isNaN(dividend) || isNaN(divisor))
    {
        throw new Error("Values must be a number!");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error)
{
    console.error(error);
}

console.log("You have reached the end!");