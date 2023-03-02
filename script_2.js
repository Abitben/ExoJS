function factorial(input){
let result = 1;
number = Number(input);
for(let x = 1; x <= input; x++){
  result *= x ;
}
console.log(`Le factoriel de ${input} est ${result}`);
}


input = prompt("Donne un chiffre entre 1 et 5")
factorial(input)