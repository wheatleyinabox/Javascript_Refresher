let count = 0;

document.getElementById("decreaseButton").onclick = function()
{
    count--;
    document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("resetButton").onclick = function()
{
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increaseButton").onclick = function()
{
    count++;
    document.getElementById("countLabel").innerHTML = count;
};