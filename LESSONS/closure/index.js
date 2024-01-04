// closure -> A function defined inside of another function,
//            the inner function has access to the variables
//            and scope of the outer function.
//            Allow for private variables & state maintenance
//            ***Used frequently in JS frameworks: React, Vue, Angular



// EXAMPLE 1
function outer()
{
    let message = "Hello";
    function inner()
    {
        console.log(message);
    }

    inner();
}

outer();



// EXAMPLE 2
function createCounter() // similar to a class
{
    let count = 0;

    function increment()
    {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount()
    {
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

// counter.count = 0;
// console.log(count); doesn't work!
// console.log(counter.count); returns undefined

console.log(`The current count is ${counter.getCount()}`);



// EXAMPLE 3
function createGame()
{
    let score = 0;
    function increaseScore(points)
    {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points)
    {
        score -= points;
        console.log(`+${points}pts`);
    }

    function getScore(points)
    {
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

// score = 10000000 // no security without closure D:

const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.increaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);