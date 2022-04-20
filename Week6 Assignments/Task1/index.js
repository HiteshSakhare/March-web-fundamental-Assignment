const x=[11,21,31,41,51]
const y=[1,2,3,4,5]
const z=[8,7,6,5,3]

document.write(`x= ${x}`)
document.write(`<br> y= ${y}`)
document.write(`<br> z= ${z}`)
function mulby2(ele){
    const x1=ele*2
    return x1
}

function multiplyBy2(array){
    const result=[]

    for(let i=0;i<array.length;i++){
        const mul=mulby2(array[i])
        result.push(mul)
    }
    return result
}

const Result1=multiplyBy2(x)
const Result2=multiplyBy2(y)
const Result3=multiplyBy2(z)

document.write(`<br><br>Result1= ${Result1}`)
document.write(`<br> Result2= ${Result2}`)
document.write(`<br> Result3= ${Result3}`)

