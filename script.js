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
    } else {
        document.getElementById("result").innerText="If you deposit "+"<span class='highlight'>"+principal+"</span>"+",\n at an interest rate of "+"<span class='highlight'>"+rate+"</span>"+"%,\n You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+",\n in the year "+"<span class='highlight'>"+year+"</span>"+"\n"
    }
}
        
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
}
