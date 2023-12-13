
let book1 = new Book("Atomic Habits", "James Clear", 320, false);
let book2 = new Book("Zero To One", "Peter Blake", 180, false);

const myLibrary = [book1, book2];

function Book(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = function() {
    if (read === true) {
        return "Read the book";
    }
    else {
        return "Didn't read the book";
    }
  }
  Object.setPrototypeOf(this, Book.prototype);
};


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
  pTitle.innerText = `Title: ${this.title}`;
  card.appendChild(pTitle);

  const pAuthor = document.createElement("p");
  pAuthor.innerText = `Author: ${this.author}`;
  card.appendChild(pAuthor);

  const pPages = document.createElement("p");
  pPages.innerText = `Pages: ${this.pages}`;
  card.appendChild(pPages);

  const pRead = document.createElement("p");
  pRead.innerText = `${this.read()}`;
  card.appendChild(pRead);

  const readButton = document.createElement("button");
  readButton.classList.add("read-button");
  readButton.innerText = "Change read status";
  card.appendChild(readButton);

  readButton.addEventListener('click', () => {
    if (this.read === true) {
      this.read = false;
      pRead.innerText = "Didn't read the book";
    }
    else {
      this.read = true;
      pRead.innerText = "Read the book";
    }
  });

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "Remove book";
  card.appendChild(removeButton);

  removeButton.addEventListener('click', () => {
    let cardAtt = card.getAttribute("data-index");
    myLibrary.shift(cardAtt);
    mainPage.removeChild(card);
  });
}

Book.prototype.displayingBooks = displayingBooks;

for (let i = 0; i < myLibrary.length; i++) {
  myLibrary[i].displayingBooks();
}

const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  cards[i].setAttribute("data-index", i);
}

const addButton = document.querySelector(".add-book");
const dialog = document.querySelector("dialog");
const cancelButton = document.querySelector(".cancel-button");

addButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
});