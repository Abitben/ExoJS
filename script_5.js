const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

function rented() {
  console.log(
    "**************** Les livres ont-ils été emprunté au moins une fois ?"
  );
  for (let book of books) {
    if (book.rented === 0) {
      console.log("Non");
      break;
    } else {
      console.log("Oui");
    }
  }
}

function maxrented() {
  console.log("**************** Quel est le livre le plus emprunté ?");
  
  let array_rented = [];

  for (let book of books) {
    array_rented.push(book.rented);
  }

  let max_value = "";
  max_value = Math.max(...array_rented);

  for (let book of books) {
    if (book.rented === max_value)
    console.log(book)
  }
}

function minrented() {
  console.log("**************** Quel est le livre le moins emprunté ?");

  let array_rented = [];

  for (let book of books) {
    array_rented.push(book.rented);
  }

  let max_value = "";
  min_value = Math.min(...array_rented);

  for (let book of books) {
    if (book.rented === min_value)
    console.log(book)
  }
}

function find873495() {
  console.log("**************** L'ouvrage avec l'ID  873495 est le suivant:");
  const id_to_find = 873495

  for (let book of books) {
    if (book.id === id_to_find)
      console.log(book)
  }
}

function delete133712() {
  console.log("**************** L'array sans 133712:");
  const id_to_find = 133712
  book_delete = ""

  for (let book of books) {
    if (book.id === id_to_find)
    book_delete = book
  }
  console.log(book_delete) ;
  const index = books.indexOf(book_delete);
  const book_deleted = books.splice(index, 1)
  console.log(books)
  return books
}

function alphabetical(new_array) {
  console.log("******* Les ouvrages triés par ordre alphabétique sans Gatsby");
  let array = [];
  for (let book of books) {
    array.push(book.title);
  }
  console.log(array.sort());
}


rented();
maxrented();
minrented();
find873495()
delete133712();
alphabetical(delete133712());







