const display = document.getElementById("display");

function appendToDisplay(input)
{   
    display.value += input;
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{
    try
    {
        display.value = eval(display.value); // big security risk fyi D:
    }
    catch(error)
    {
        display.value = "ERROR";
    }
}