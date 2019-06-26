//First we will go through a bad approach!!


//constructor
// function book() {
//   console.log("Book is initialized..");
// }

// //instatiate an object
// const book1 = new book();
// const book2 = new book();

// console.log(book1);
// console.log(book2);

//You will notice in console that both prints th string
//'book is initialized' .But thats totally useless
//All books must not give the same output.
//Beacause each book has its own features & that are
//totally different from others.

//So to avoid this.

//Now we will go through the appropriate approch..

//Constructor

// function Books(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// const Book_1 = new Books("salt", "ariana", "2017");
// const Book_2 = new Books("Oliver Twist", "marie", "1778");

// console.log(Book_1.title);
// console.log(Book_2.title);
// Both the values will be detected by the respected
// book title...
