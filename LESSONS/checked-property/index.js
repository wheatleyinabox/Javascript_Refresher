document.getElementById("myButton").onclick = function()
{
    const areSubbed = document.getElementById("myCheckBox").checked;
    const isVisa = document.getElementById("visaBtn").checked;
    const isMasterCard = document.getElementById("masterCardBtn").checked;
    const isPayPal =document.getElementById("payPalBtn").checked;

    if (areSubbed)
    {
        console.log("You are subscribed!");
    }
    else 
    {
        console.log("You're NOT subscribed.");
    }

    if (isVisa)
    {
        console.log("You're paying with Visa!");
    }
    else if (isMasterCard)
    {
        console.log("You're paying with MasterCard!");
    }
    else if (isPayPal)
    {
        console.log("You're paying with PayPal!");
    }
    else
    {
        console.log("You must select a payment type!");
    }
};