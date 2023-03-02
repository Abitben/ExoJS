const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

function filteryear() {
  console.log(
    "****************Les entrepreneurs qui sont nés dans les années 1970"
  );
  for (let entrepreneur in entrepreneurs) {
    if (entrepreneur.year >= 1970 && entrepreneur.year < 1980) {
      console.log(entrepreneur);
    }
  }
}

function array() {
  console.log("******** L'array avec le nom et prénom de chaque entrepreneurs");
  for (let entrepreneur of entrepreneurs) {
    let array = [];
    array.push(entrepreneur.first, entrepreneur.last);
    console.log(array);
  }
}

function age() {
  console.log("******* L'âge de chacun des entrepreneurs");
  for (let entrepreneur of entrepreneurs) {
    let birth_year = "";
    birth_year = entrepreneur.year;
    let age = "";
    let year_now = new Date().getFullYear();
    age = year_now - birth_year;
    console.log(entrepreneur.first, entrepreneur.last);
    console.log(age);
  }
}

function alphabetical() {
  console.log("******* Le nom des entrepreneurs trié par ordre alphabétique");
  let array = [];
  for (let entrepreneur of entrepreneurs) {
    array.push(entrepreneur.last);
  }
  console.log(array.sort());
}

filteryear();
array();
age();
alphabetical();
