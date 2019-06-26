//Classes(New to ES6):Where we can add constructor//
//with methods...
class BookClass {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  GetSummary() {
    return `${this.title} is written by ${this.author}`;
  }
  GetAge() {
    const years = new Date().getFullYear() - this.year;
    if (years > 1) {
      return `${this.title} is ${years} years old`;
    } else if (years === 0) {
      return `${this.title} is latest`;
    } else {
      return `${this.title} is ${years} year old`;
    }
  }
  static Random() {
    return `Im Static!`;
  }
}

const book3 = new BookClass("Subtle Art", "K.K", "2019");

console.log(book3);
console.log(book3.GetSummary());
console.log(book3.GetAge());

//Static Method : No object can call this method..Only Parent object can call.
//You can only call static functions without instantiating them with
//an object..
console.log(BookClass.Random()); //It Works..
console.log(book3.Random()); //It doesnt work..

//Note: We use static to lock the methods whose rights are only given to the
//class name..

