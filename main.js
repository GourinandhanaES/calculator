//display content in calculator screen
function displayContent(content){
    result.value += content
}
//clear calculator screen
function calcScreenClear(){
    result.value = ""
}
//calculating output
function calcOutput(){
    result.value = eval(result.value);
}
//removing last digit
function removeLastDigit(){
    result.value = result.value.slice(0,-1)
}