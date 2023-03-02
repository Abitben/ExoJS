  function pyramid(input){
    const hash = "#"
    const space = " "
    number = Number(input);
    console.log("Et voilà le travail !");
    for(let x = 1; x <= number; x++){
      let hashes = hash.repeat(x) ;
      let countdown = number - x ;
      let spaces = space.repeat(countdown) ;
      console.log(spaces + hashes)
    }
  }
  
  input = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?") ;
  pyramid(input)

