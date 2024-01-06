// Promise -> An Object that manages asyn operations.
//            Wrap a Promise Object around {async code}
//            "I promise to return a value"
//            PENDING -> RESOLVED OR REJECTED
//            new Promise((resolve, reject) => {async code});



// EXAMPLE 1

// DO THESE CHORES IN ORDER
// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

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

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished the chores!");
//         });
//     });
// });

walkDog().then(value => {console.log(value); return cleanKitchen();})
         .then(value => {console.log(value); return takeOutTrash();})
         .then(value => {console.log(value); console.log("You finished the chores!");})
         .catch(error => {console.error(error)});