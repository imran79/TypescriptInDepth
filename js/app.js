var Category;
(function (Category) {
    Category[Category["Fiction"] = 0] = "Fiction";
    Category[Category["Science"] = 1] = "Science";
    Category[Category["Biography"] = 2] = "Biography";
    Category[Category["Children"] = 3] = "Children";
    Category[Category["History"] = 4] = "History";
})(Category || (Category = {}));
;
var Book = (function () {
    function Book(title, author, available, category) {
        this.title = title;
        this.author = author;
        this.available = available;
        this.category = category;
    }
    return Book;
})();
function getAllBooks() {
    var books = [];
    books.push(new Book('Half Girlfriend', 'Chetan Bhangat', true, Category.Fiction));
    books.push(new Book('I refuse to give bribe', 'Sanjay Misra', false, Category.Fiction));
    books.push(new Book('My Kempf', 'Adolf Hitler', true, Category.Biography));
    return books;
}
function getAllBooksTitlesByCategory(category) {
    var titles = [];
    var allBooks = getAllBooks();
    for (var _i = 0; _i < allBooks.length; _i++) {
        var book = allBooks[_i];
        if (book.category === category) {
            titles.push(book.title);
        }
    }
    return titles;
}
function logTitleNamesOfBooks(titles) {
    for (var _i = 0; _i < titles.length; _i++) {
        var title = titles[_i];
        console.log(title);
    }
}
var titleNames = getAllBooksTitlesByCategory(Category.Fiction);
logTitleNamesOfBooks(titleNames);
//# sourceMappingURL=app.js.map