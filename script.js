// const myLibrary = [book1, book2];

function Book(title, author, pages, read) {
  this.author = author;
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

const mainPage = document.getElementById("main");

function displayingBooks() {
  const card = document.createElement("div");
  card.classList.add("card");
  mainPage.appendChild(card);

  const pTitle = document.createElement("p");
  pTitle.innerText = `Title: ${book1.title}`; // this.title
  card.appendChild(pTitle);

  const pAuthor = document.createElement("p");
  pAuthor.innerText = `Author: ${book1.author}`; // this.author
  card.appendChild(pAuthor);

  const pPages = document.createElement("p");
  pPages.innerText = `Pages: ${book1.pages}`; // this.pages
  card.appendChild(pPages);

  const pRead = document.createElement("p");
  pRead.innerText = `Read: ${book1.read()}`; // this.read
  card.appendChild(pRead);
}

displayingBooks();