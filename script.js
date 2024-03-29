const myLibrary = [];

class Book {

  constructor(title, author, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;    
  }

  readStatus = function() {
    if (this.read === true) {
      return "Read the book";
    } else {
      return "Didn't read the book"
    }
  };

  displayingBooks() {
    console.log(this);
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
    pRead.innerText = `${this.readStatus()}`;
    card.appendChild(pRead);
  
    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.innerText = "Change read status";
    card.appendChild(readButton);
    console.log(this.read === true);
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


  addBookToLibrary() {
    let newObject = myLibrary.length - 1; 
    console.log(newObject);
    myLibrary[newObject].displayingBooks();
  };
  
};

const mainPage = document.getElementById("main");


// Book.prototype.displayingBooks = displayingBooks;

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
const createButton = document.querySelector(".create-button");

addButton.addEventListener("click", () => {
  dialog.showModal();
});

createButton.addEventListener("click", () => {
  if (titleForm.value.length > 0 && authorForm.value.length > 0 && pagesForm.value.length > 0) {
    const book = new Book(titleForm.value, authorForm.value, pagesForm.value, readForm.checked);
    myLibrary.push(book);
    console.log(myLibrary);
    console.log(book);
    book.addBookToLibrary();
    dialog.close();
    titleForm.value = "";
    authorForm.value = "";
    pagesForm.value = "";
    readForm.checked = false;
  }
});

cancelButton.addEventListener("click", () => {
  dialog.close();
  titleForm.value = "";
  authorForm.value = "";
  pagesForm.value = "";
  readForm.checked = false;
});

const titleForm = document.getElementById("title");
const authorForm = document.getElementById("author");
const pagesForm = document.getElementById("pages");
const readForm = document.getElementById("read");