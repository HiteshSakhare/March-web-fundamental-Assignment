let num1=prompt("Enter First Number:")
let num2=prompt("Enter Second Number:")
let num3=prompt("Enter Third Number:")

if(num1 > num2 && num1 > num3 ){
    console.log(num1," is greatest")
}
else if(num2 > num1 && num2 > num3 ){
        console.log(num2," is greatest")
    }
else{
    console.log(num3, " is greatest.")
}