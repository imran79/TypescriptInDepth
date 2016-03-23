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
    function Book(id, title, author, available, category) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
        this.category = category;
    }
    return Book;
})();
var Customer = (function () {
    function Customer(name, age) {
        this.name = name;
        this.age = age;
    }
    return Customer;
})();
var cutomers = [];
function getAllBooks() {
    var books = [];
    books.push(new Book(1, 'Half Girlfriend', 'Chetan Bhangat', true, Category.Fiction));
    books.push(new Book(2, 'I refuse to give bribe', 'Sanjay Misra', false, Category.Fiction));
    books.push(new Book(3, 'My Kempf', 'Adolf Hitler', true, Category.Biography));
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
function CreateCustomerId(name, id) {
    return name + id;
}
// Optional Parameter
function CreateCustomer(name, age) {
    cutomers.push(new Customer(name, age));
}
// Rest parameter ... before parameter name
function bookReadByCustomer(name) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
}
var titleNames = getAllBooksTitlesByCategory(Category.Fiction);
logTitleNamesOfBooks(titleNames);
/****** Fat Arrow examples */
titleNames.forEach(function (val, idx, arr) { return console.log(++idx + '-' + val); });
function getBookById(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
/***Function Type Samples */
var createBookId;
createBookId = CreateCustomerId;
// this is work as delegate where function defination is same :)
console.log(createBookId("imran", 1));
//# sourceMappingURL=app.js.map