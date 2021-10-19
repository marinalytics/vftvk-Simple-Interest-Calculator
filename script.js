function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years / 100;
    var year = new Date().getFullYear() + parseInt(years);
    if(principal<=0 || principal=='') {
        alert("Enter a positive number")
        document.getElementById('principal').focus()
    } 
    document.getElementById("result").innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + year + "</span>";
}

function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}

}
        
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
}
