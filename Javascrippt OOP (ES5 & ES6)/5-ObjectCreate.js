//Lets g through the complex approach of creating objects.
//first we defined funstions then we created object and inherited all the
//properties...

const BookProto = {
  GetSummary: function() {
    return `${this.title} is written by ${this.author}`;
  },
  GetAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
  }
};

//Way One
const book1 = Object.create(BookProto);
book1.title = "Black Beauty";
book1.author = "John Doe";
book1.year = "1509";

//Way Two
const book2 = Object.create(BookProto, {
  title: { value: "SeeYou" },
  author: { value: "John" },
  year: { value: "1897" }
});

//But these both ways are used rarely..

console.log(book1.GetAge());
console.log(book2.GetAge());
