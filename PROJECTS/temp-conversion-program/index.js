const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");


function convert()
{
    if (toFahrenheit.checked)
    {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
        // toFixed() - precision, adds n amount of decimal places
    }
    else if (toCelsius.checked)
    {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else
    {
        result.textContent = "Select a unit!"
    }
}