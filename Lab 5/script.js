console.log("Connected");

function calculate()
{
    const price = document.getElementById("productPrice").value;
    const items = document.getElementById("productQuantity").value;

    if(items <= 0)
    {
        document.getElementById("errorQuantity").innerHTML = "Must add 1 Product";
        document.getElementById("errorQuantity").style = "color:red";
        document.getElementById("payable").value = "";
        document.getElementById("button").style.display = "none";
    }
    else
    {
        document.getElementById("errorQuantity").innerHTML = "";

        const bill = price * items;

        document.getElementById("payable").value = bill;
        document.getElementById("button").style.display = "block";
    }
}