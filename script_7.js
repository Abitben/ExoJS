function chatbot(string) {
  let input = string.trim();

  if (input.endsWith('?')) {
    console.log("- Ouais Ouais ...");
  } else if (input === input.toUpperCase() && input.length > 0) {
    console.log("- Pwa, calme-toi ...");
  } else if (input.includes('Fornite')) {
    console.log("- On s' fait une partie soum-soum ?");
  } else if (input.length === 0) {
    console.log("- T'es en PLS ?");
  } else {
    console.log("- Balek");
  }

  console.log("- Petit con ...");
}

let input = prompt("Hey ! Espèce de malhonnête, Je vais te dire les termes :");
chatbot(input);
