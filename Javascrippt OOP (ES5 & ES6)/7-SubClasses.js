class BookClass2 {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  GetSummary() {
    return `${this.title} is written by ${this.author}`;
  }
}

class Magazine2 extends BookClass2 {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag = new Magazine2("mag One", "Paul", "1133", "February");
console.log(mag);

//The end for this OOP section...
//Bye...
