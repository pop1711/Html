function checkNumber(){
    //Get the value of the input field with name = "inputNumber"
    let numInput = document.getElementById('inputNumber').value;
    let text;
    // If numInput is Not a Number or less than one or greater than 10
    if(isNaN(numInput) || numInput < 1 || numInput > 10){
       text = ("ไม่ถูกต้อง");
    } else text = ("ถูกต้อง");

    document.getElementById("demo").innerHTML = text;
}
