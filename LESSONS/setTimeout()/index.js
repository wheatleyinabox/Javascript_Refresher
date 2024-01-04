// setTimeout() = function in Javascript that allows you to schedule
//                the execution of a function after an amount of time (ms)
//                Time are approximate (varies based on the workload of the Javascript runtime env.)
//                *no recommended in precision time use (ex. stopwatch)

//                setTimeset(callback, delay);
//                clearTimeout(timeoutId) = can cancel a timeout before it triggers



// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
// clearTimeout(timeoutId);

let timeoutID;

function startTimer()
{
    timeoutID = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer()
{
    clearTimeout(timeoutID);
    console.log("CLEARED");
}