// Async/Await -> Async -> makes a function return a promise
//                Await -> make an async function wait for a promise

//                Allows you write asynchronous code in a synchronous manner
//                Async doesn't have resolve or reject parameters
//                Everything after Await is placed in an event queue

// Await depends on async and visa versa


function walkDog()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked)
            {
                resolve("You walked the dog! 🐶");
            }
            else
            {
                reject("You DIDN'T walk the dog! ❌");
            }
        }, 1500);
    });
}

function cleanKitchen()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned)
            {
                resolve("You cleaned the kitchen! 🧽");
            }
            else
            {
                reject("You DIDN'T clean the kitchen! ❌");
            }  
        }, 2500);
    });
}

function takeOutTrash()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOut = true;
            if (trashOut)
            {
                resolve("You took out the trash! 🗑");
            }
            else
            {
                reject("You DIDN'T take out the trash! ❌");
            }
        }, 500);
    });
}

async function doChores()
{
    try
    {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!");
    }
    catch(error)
    {
        console.error(error);
    }
}

doChores();