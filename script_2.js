
function factorial(input){
let number = 1;
let result = 1;
number = Number(input);
for(let number = 1; number <=5; number++){
  console.log(`on va compter jusqu'à 5 : ${number}`);
  result *= number;
  console.log(result);
}
}

input = prompt("Donne un chiffre entre 1 et 5")
factorial(input)