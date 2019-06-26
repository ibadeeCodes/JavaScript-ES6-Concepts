//Hello guys now I'll explain inheritance..

function Books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
Books.prototype.getsummary = function() {
  return `${this.title} is written by ${this.author}`;
};

function Magazine(title, author, year, month) {
  Books.call(this, title, author, year);
  this.month = month;
}

//.call() function inherits the constructor..

Magazine.prototype = Object.create(Books.prototype);

const mag1 = new Magazine("Mag One", "john", "2017", "Jan");

console.log(mag1);
console.log(mag1.getsummary()); // it will give error because
//its a function of Books prototype..To inherit this we will
//assign the book prototype to magazine prototype..(Check line:19)
