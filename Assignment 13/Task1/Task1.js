let num1=prompt("Enter Number1")
let num2=prompt("Enter Number2")
let num3=prompt("Enter Number3")

let numA1=parseInt(num1)
let numA2=parseInt(num2)
let numA3=parseInt(num3)

if(numA1 < numA2 && numA1 < numA3){
    console.log("Smalest Number", numA1)
}
else if (numA2 < numA1 && numA2 < numA3) {
    console.log("Smalest Number", numA2)
}
else{
    console.log("Smalest Number", numA3)
}

