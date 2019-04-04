let degits = "";
checkLength = () =>
{
   digits = document.getElementById("input_digit").value;
   if(digits.length ==3)
   { 
      document.getElementById('check_btn').classList.remove("disabled"); 
   } 
  else 
  { 
      document.getElementById('check_btn').classList.add("disabled");
  }
}
 checkArmstrong =() =>
{
  if (digits =="" || digits.length == 0 || digits == null)
  {
    alert("C'mon man!!! you can't leave your text field blank :P");
    document.getElementById('display_result').innerHTML= "";
  }
  if (isNaN(digits))
  {
    alert("Oops!!! You should enter digits instead (eg. 123)");
    document.getElementById('display_result').innerHTML= "";
  }
  if (digits.length !=3)
  {
    alert("Ensure you have entered only 3 digits");
    document.getElementById('display_result').innerHTML= "";
  }
  else
  {
    //convert each char of the variable to an string and places in an array 
    var string =[...digits.toString()]
    var result = 0
    var power = string.length;
    string.forEach((digit) => {
        result+=Math.pow(parseInt(digit),power)
    }) 
    if(result == digits)
    {
        document.getElementById('display_result').innerHTML= "'"+digits +"' is an Armstrong Integer";
    }
    else
    {
        document.getElementById('display_result').innerHTML= "'"+digits +"' is not an Armstrong Integer";
    }
  } 
}