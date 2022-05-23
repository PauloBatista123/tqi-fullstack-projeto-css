// var currentNumberWrapper = document.getElementById("currentNumber");
// var currentNumber = 0;

// function increment(){
//     if(currentNumber >= 0){
//         currentNumber = currentNumber + 1;
//         currentNumberWrapper.innerHTML = currentNumber;
//         document.getElementById("message").innerHTML = "";
//     }
    
// }

// function decrement(){
//     if(currentNumber > 0){
//         currentNumber = currentNumber - 1;
//         currentNumberWrapper.innerHTML = currentNumber;
//     }else{
//         document.getElementsByName("subtrair").disabled = true;
//         document.getElementById("message").innerHTML = "<p>Não é possivel diminuir<p/>";
//     }
// }

var array = [1,2,3,4,5,6];

array.forEach(function(item, index){
    console.log(item)
})

array.push(8)

console.log(array)
