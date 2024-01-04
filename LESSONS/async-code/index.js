// sync -> Executes line by line consecutively in a sequential manner
//         Code that waits for an operation to complete.

// async -> Allows multiple operators to be performed concurrently without waiting
//          Doesn't block the execution flow and allows the program to continue
//          (I/O operations, network requests, fetching data)
//          Handled with: Callbacks, Promises, Async/Await



// Sync
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

// Async
function func1(callback)
{
    setTimeout(() => {console.log("Task 1")
                     callback()}, 3000); // async function
}
function func2()
{
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);