
enum Category{"Fiction","Science","Biography","Children","History"};

class Book{    
    constructor(public id : number,public title : string, public author : string , public available : boolean, 
               public category : Category){
        
    }
   
}

function getAllBooks() : Book[]{    
    const books : Book[] = [];
    books.push(new Book(1,'Half Girlfriend','Chetan Bhangat', true,Category.Fiction));  
    books.push(new Book(2,'I refuse to give bribe','Sanjay Misra', false,Category.Fiction)); 
    books.push(new Book(3,'My Kempf','Adolf Hitler', true,Category.Biography));   
    return books;
    
}

function getAllBooksTitlesByCategory(category : Category) : Array<string>{    
    const titles : Array<string> = [];
    const allBooks = getAllBooks();
    for (let book of allBooks) {
        if(book.category === category){
            titles.push(book.title);
        }
        
    }
    return titles;
}

function logTitleNamesOfBooks(titles : string[]) : void {
    for(let title of titles){
        console.log(title);
    }
    
}

const titleNames = getAllBooksTitlesByCategory(Category.Fiction);
logTitleNamesOfBooks(titleNames);

/****** Fat Arrow examples */

titleNames.forEach((val,idx,arr) => console.log(++idx + '-' + val));

function getBookById(id : number) : Book {    
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id)[0]
}