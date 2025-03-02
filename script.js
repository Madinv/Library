const books = [];

// Отображение книг
function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  books.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book-card";
    bookDiv.innerHTML = `
            <h3>${book.name}</h3>
            <p>Author: ${book.author}</p>
            <p>Year: ${book.year}</p>
            <p>Pages: ${book.pages}</p>
            <button class="delete-button" onclick="deleteBook(${index})">Delete</button>
        `;
    bookList.appendChild(bookDiv);
  });
}

// Добавление новой книги
document.getElementById("addBookBtn").onclick = function () {
  document.getElementById("modal").style.display = "block";
};

document.getElementById("closeModal").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

document.getElementById("bookForm").onsubmit = function (e) {
  e.preventDefault(); // Предотвратить перезагрузку страницы
  const name = document.getElementById("bookName").value;
  const author = document.getElementById("bookAuthor").value;
  const year = document.getElementById("bookYear").value;
  const pages = document.getElementById("bookPages").value;

  const book = {
    name: name,
    author: author,
    year: year,
    pages: pages,
  };

  books.push(book);
  displayBooks();
  document.getElementById("bookForm").reset();
  document.getElementById("modal").style.display = "none";
};

// Удаление книги
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

// Закрываем модальное окно, если нажать за его пределами
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
