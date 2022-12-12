const courses = [
  { produit: "stylo", prix: 2, quantite: 5 },
  { produit: "imprimante", prix: 200, quantite: 1 },
  { produit: "cutter", prix: 2.5, quantite: 2 },
  { produit: "feuilles", prix: 10, quantite: 1 },
];

console.log(courses);
/* Map : permet de recréer un tableau çà partir d'un tableau initial */
const products = courses.map((course) => course.produit);
console.log(products);
/* Avant ES6 : */
const productsOld = [];
for (let course of courses) {
  productsOld.push(course.produit);
  // console.log(course);
}
console.log(productsOld);

/* Reduce permet d'obtenir une valeur unique : */
const total = courses.reduce((cumul, course) => {
  return cumul + course.prix * course.quantite;
}, 0);

console.log(total);

/* avant ES6 */
let totalOld = 0;
for (let course of courses) {
  totalOld += course.prix * course.quantite;
  // console.log(course);
}
console.log(totalOld);

/*  filter : permet de filtrer les valeurs et ne retourner que ceux qui respectent la condition  */
const courses10 = courses.filter((course) => course.prix >= 10);
console.log(courses10);

/* avant ES6 */
let courses10Old = [];
for (let course of courses) {
  if (course.prix >= 10) {
    courses10Old.push(course);
  }
}
console.log(courses10Old);

/* On put créer un tableau d'objets avec map, mais attention il faut utiliser return à l'intérieur d'accolades */
const coursesNew = courses.map((course) => {
  return { nom: course.produit, total: course.prix * course.quantite };
});
console.log(coursesNew);
