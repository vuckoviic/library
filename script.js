const myLibrary = [];

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

function addBookToLibrary() {
//   for (let prop in Book) {
//     myLibrary.push(prop);
//   }
}