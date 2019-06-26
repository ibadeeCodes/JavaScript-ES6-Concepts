//Lets start the topic: Prototypes..
//To add a new property to a constructor, you must add
// it to the constructor function.
// But through prototype we can do inheritance..
// to a particular object directly without writing
// that property inside the braces of that object..(By Ibad)
//source: w3school.

function Books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const Book_1 = new Books("salt", "ariana", "2017");
const Book_2 = new Books("Oliver Twist", "marie", "1778");

console.log(Book_1.title);
console.log(Book_2.title);

Books.prototype.getsummary = function() {
  return `${this.title} is written by ${this.author}`;
};

console.log(Book_1.getsummary());
console.log(Book_2.getsummary());
// Through prototype we gives an additional property

//Now defining one more function in prototyping..

Books.prototype.getYear = function (){
  const years = new Date().getFullYear() - this.year
  return `${this.title} is ${years} old..`
}

console.log(Book_2.getYear())
console.log(Book_2);
//getFullYear gives four digit number year..



