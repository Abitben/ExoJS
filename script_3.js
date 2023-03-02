  function pyramid(input){
    const hash = "#"
    const space = " "
    number = Number(input);
    let hashes = ""
    let symetry = ""
    let spaces = ""
    console.log("Et voilà le travail !");
    for(let x = 1; x <= number; x++){
      hashes = hash.repeat(x) ;
      countdown = number - x ;
      spaces = space.repeat(countdown) ;
      console.log(spaces + hashes)
    }
  }
  
  input = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?") ;
  pyramid(input)

