import {
    Category
} from './enum';
import {
    Book,
    Customer,
    DamageLogger,
    Librarian
} from './interface/interface';
import {
    UniversityLibrarian,
    ReferenceItem,
    Encyclopedia
} from './class/class'


const cutomers: Customer[] = [];

function getAllBooks(): Book[] {
    const books: Book[] = [];
    books.push({
        id: 1,
        title: 'Half Girlfriend',
        author: 'Chetan Bhangat',
        available: true,
        category: Category.Fiction
    });
    books.push({
        id: 2,
        title: 'I refuse to give bribe',
        author: 'Sanjay Misra',
        available: false,
        category: Category.Fiction
    });
    books.push({
        id: 3,
        title: 'My Kempf',
        author: 'Adolf Hitler',
        available: true,
        category: Category.Biography
    });
    return books;

}

function getAllBooksTitlesByCategory(category: Category): Array < string > {
    const titles: Array < string > = [];
    const allBooks = getAllBooks();
    for (let book of allBooks) {
        if (book.category === category) {
            titles.push(book.title);
        }

    }
    return titles;
}

function logTitleNamesOfBooks(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }

}

function CreateCustomerId(name: string, id: number): string {
    return name + id;
}

// Optional Parameter
function CreateCustomer(name: string, age ? : number) {
    cutomers.push({
        name: name,
        age: age
    });
}

function getBookById(id: number): Book {
    const books = getAllBooks();
    return (books.filter(book => book.id === id) &&
            books.filter(book => book.id === id).length > 0) ?
        books.filter(book => book.id === id)[0] : null;
}

// Rest parameter ... before parameter name

function checkOutBooksByCutomer(name: string, ...bookIds: number[]): void {

    console.log('Check out book by cutomer  ' + name);
    const checkoutBooks: Book[] = [];
    for (let bookid of bookIds) {
        let book = getBookById(bookid);
        if (book && book.available) {
            checkoutBooks.push(book);
        }
    }

}

/*Fuctions Overloading */

function getTitles(author: string): string[];

function getTitles(category: Category): string[];

function getTitles(criteria: any): string[] {

    const books = getAllBooks();
    const titles: string[] = [];
    if (typeof criteria === 'string') {
        books.forEach(book => {
            if (book.title === criteria) {
                titles.push(book.title);
            }

        })
    } else if (typeof criteria === 'Category') {
        books.forEach(book => {
            if (book.category === criteria) {
                titles.push(book.title);
            }
        })
    }
    return titles;
}

const titleNames = getAllBooksTitlesByCategory(Category.Fiction);
logTitleNamesOfBooks(titleNames);

/****** Fat Arrow examples */

titleNames.forEach((val, idx, arr) => console.log(++idx + '-' + val));


/***Function Type Samples */

let createBookId: (name: string, id: number) => string;

createBookId = CreateCustomerId;
// this is work as delegate where function defination is same :)
console.log(createBookId("imran", 1));

let bookDamageLogger: DamageLogger;

bookDamageLogger = (reason: string) => console.log('This book is damaged due to' + reason);

bookDamageLogger('pages are not printed in sequence');

let book: Book = {
    id: 1,
    title: 'Half Girlfriend',
    author: 'Chetan Bhangat',
    available: true,
    category: Category.Fiction,
    markedDamaged: (reason: string) => console.log('This book is damaged due to' + reason)
}

/*let referenceType: ReferenceItem = new ReferenceItem('Facts and  Figure', 2001);
referenceType.set('Tata McgrawHill');
referenceType.printItem(); */


let encyclopedia: ReferenceItem = new Encyclopedia('Facts and  Figure', 2001, 10);

encyclopedia.printItem();
//encyclopedia.printCitation();

// Class Expressions---

let encyclopedia1  = class extends ReferenceItem{
    
    printCitation = () =>{
        console.log(`${this.title}`);
    }
}

let testClassExpression = new encyclopedia1('test',1994);
testClassExpression.printCitation();

class Novel extends class{title :string}{
    mainCharacter : string;
}