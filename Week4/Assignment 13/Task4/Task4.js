let num1 = prompt("Enter Any Number")
let count = 0;
/* let m=0; */

let numA1 = parseInt(num1)
let CountNum = parseInt(count)

/* m=numA1/2 */
if (numA1 == 0 || numA1 == 1) {
    console.log(numA1, " is not prime number.")
}
else {
    for (let i = 2; i < numA1; i++) {
        if (numA1 % i == 0) {
            console.log(numA1, " is not prime number.")
            CountNum++
            break
        }
    }
    if (CountNum == 0) {
        console.log(numA1, " is prime number.")
    }
}

