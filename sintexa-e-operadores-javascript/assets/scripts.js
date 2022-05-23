
// function recebeValor(){
//     var num1 = prompt("Entre com o valor 1");
//     document.getElementById("valor1").innerHTML = num1;
//     var num2 = prompt("Entre com o valor 2");
//     document.getElementById("valor2").innerHTML = num2;

//     let iguais = (num1 == num2 ?  "são iguais." : "não são iguais.");
//     let soma = Number(num1) + Number(num2);
//     var comp_soma;
//     if(soma > 10 && soma < 20){
//         comp_soma = "que é maior que 10 e menor que 20.";
//     }else if(soma < 10){
//         comp_soma = "que é menor que 10 e menor que 20.";
//     }else if(soma > 20){
//         comp_soma = "que é maior que 10 e maior que 20.";
//     }else{

//     }

//     var message = "Os números " + num1 + " e " + num2 + iguais + "Sua soma é " + soma + " " + comp_soma;
//     document.getElementById("message").innerHTML = message;
// }

// recebeValor();

//IIFE

function validaArray(arr, tamanho) {
    try {
      if (!arr.length || arr.length !== tamanho) throw new RangeError("O tamanho do array é inválido");
  
      return arr;
    } catch(e) {
      if (e instanceof RangeError) {
        return console.log(e.message);
      } else {
        return e;
      }
    }
  } 
  
  validaArray();