function lovepercent()
{
    let namevalue=document.getElementById("name").value;
    let lnamevalue=document.getElementById("lname").value;

    if(namevalue=="")
        alert("Please enter your name");
    else if(!isNaN(namevalue))
        alert("Numbers are not allowed!");
    else if(namevalue.length<=2)
        alert("Minimum length of name is 3 characters.\nEnter a valid name! ");
    else if(lnamevalue=="")
        alert("Please enter your name");
    else if(!isNaN(lnamevalue))
        alert("Numbers are not allowed!");
    else if(lnamevalue.length<=2)
        alert("Minimum length of name is 3 characters.\nEnter a valid name! ");
    else
        document.getElementById("lovevalue").value=Math.floor(Math.random() * 100)+"%";
}