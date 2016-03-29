var enum_1 = require('./enum');
var class_1 = require('./class/class');
var cutomers = [];
function getAllBooks() {
    var books = [];
    books.push({ id: 1, title: 'Half Girlfriend', author: 'Chetan Bhangat', available: true, category: enum_1.Category.Fiction });
    books.push({ id: 2, title: 'I refuse to give bribe', author: 'Sanjay Misra', available: false, category: enum_1.Category.Fiction });
    books.push({ id: 3, title: 'My Kempf', author: 'Adolf Hitler', available: true, category: enum_1.Category.Biography });
    return books;
}
function getAllBooksTitlesByCategory(category) {
    var titles = [];
    var allBooks = getAllBooks();
    for (var _i = 0; _i < allBooks.length; _i++) {
        var book_1 = allBooks[_i];
        if (book_1.category === category) {
            titles.push(book_1.title);
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
    cutomers.push({ name: name, age: age });
}
function getBookById(id) {
    var books = getAllBooks();
    return (books.filter(function (book) { return book.id === id; }) &&
        books.filter(function (book) { return book.id === id; }).length > 0) ?
        books.filter(function (book) { return book.id === id; })[0] : null;
}
// Rest parameter ... before parameter name
function checkOutBooksByCutomer(name) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log('Check out book by cutomer  ' + name);
    var checkoutBooks = [];
    for (var _a = 0; _a < bookIds.length; _a++) {
        var bookid = bookIds[_a];
        var book_2 = getBookById(bookid);
        if (book_2 && book_2.available) {
            checkoutBooks.push(book_2);
        }
    }
}
function getTitles(criteria) {
    var books = getAllBooks();
    var titles = [];
    if (typeof criteria === 'string') {
        books.forEach(function (book) {
            if (book.title === criteria) {
                titles.push(book.title);
            }
        });
    }
    else if (typeof criteria === 'Category') {
        books.forEach(function (book) {
            if (book.category === criteria) {
                titles.push(book.title);
            }
        });
    }
    return titles;
}
var titleNames = getAllBooksTitlesByCategory(enum_1.Category.Fiction);
logTitleNamesOfBooks(titleNames);
/****** Fat Arrow examples */
titleNames.forEach(function (val, idx, arr) { return console.log(++idx + '-' + val); });
/***Function Type Samples */
var createBookId;
createBookId = CreateCustomerId;
// this is work as delegate where function defination is same :)
console.log(createBookId("imran", 1));
var bookDamageLogger;
bookDamageLogger = function (reason) { return console.log('This book is damaged due to' + reason); };
bookDamageLogger('pages are not printed in sequence');
var book = {
    id: 1,
    title: 'Half Girlfriend',
    author: 'Chetan Bhangat',
    available: true,
    category: enum_1.Category.Fiction,
    markedDamaged: function (reason) { return console.log('This book is damaged due to' + reason); }
};
var referenceType = new class_1.ReferenceItem('Facts and  Figure', 2001);
referenceType.set('Tata McgrawHill');
referenceType.printItem();
//# sourceMappingURL=app.js.map