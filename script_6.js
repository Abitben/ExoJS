
const first = "CCGUCGUUGCGCUACAGC";
const second = "CCUCGCCGGUACUUCUCG";


console.log(first.substring(0, 3));

function slice(string) {
  let array = [];
  let splitted = "";
  let y = "";
  let z = "";
  for (let x = 0; x <= string.length; x++) {
    y = x * 3; 
    z = 3 + x * 3;
    if (z === 21) {
      break;
    }
    array.push(string.substring(y, z));
  }
  console.log("c'est l'array que l'on souhaite");
  console.log(array)
  return array;
}

function identifier(array) {
  for (let index in array) {
    switch (array[index]) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        console.log("Sérine");
        break;
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
        console.log("Proline");
        break;
      case "UUA":
      case "UUG":
        console.log("Leucine");
        break;
      case "UUU":
      case "UUC":
        console.log("Phénylalanine");
        break;
      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
        console.log("Arginine");
        break;
      case "UAU":
      case "UAC":
        console.log("Tyrosine");
        break;
      default:
        console.log("Cette entrée n'est pas reconnue");
        break;
    }
  }
}

console.log(`*********c'est la première chaine de caractère : ${first}`);
let first_array = "";
first_array = slice(first);
identifier(first_array);

console.log(`*********c'est la seconde chaine de caractère : ${second}`);
let second_array = "";
second_array = slice(second);
identifier(second_array);

