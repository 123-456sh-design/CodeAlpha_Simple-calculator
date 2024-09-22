let num1 = document.querySelector(".fNum")
let num2 = document.querySelector(".sNum")
let result = document.querySelector(".result")
let addBtn = document.querySelector(".add")
let subBtn = document.querySelector(".subtract")
let mulBtn = document.querySelector(".multiply")
let divBtn = document.querySelector(".division")

addBtn.addEventListener("click",function(){
    result.value = parseInt(num1.value) + parseInt(num2.value)
})

subBtn.addEventListener("click",function(){
    result.value = parseInt(num1.value) - parseInt(num2.value)
})

mulBtn.addEventListener("click",function(){
    result.value = parseInt(num1.value) * parseInt(num2.value)
})

divBtn.addEventListener("click",function(){
    result.value = parseInt(num1.value) / parseInt(num2.value)
})


