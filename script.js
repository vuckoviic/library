const myLibrary = [book1, book2];

function Book(author, title, pages, read) {
  this.autor = author;
  this.title = title;
  this.pages = pages;
  this.read = function() {
    if (read === true) {
        return "read the book";
    }
    else {
        return "didn't read the book";
    }
  }
}

let book1 = new Book("Atomic Habits", "James Clear", 320, false);
let book2 = new Book("Zero To One", "Peter Blake", 180, false);

function addBookToLibrary() {
//   for (let prop in Book) {
//     myLibrary.push(prop);
//   }
}