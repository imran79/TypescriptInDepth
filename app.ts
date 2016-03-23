
enum Category{"Fiction","Science","Biography","Children","History"};

class Book{    
    constructor(public title : string, public author : string , public available : boolean, 
               public category : Category){
        
    }
   
}

function getAllBooks() : Book[]{    
    const books : Book[] = [];
    books.push(new Book('Half Girlfriend','Chetan Bhangat', true,Category.Fiction));  
    books.push(new Book('I refuse to give bribe','Sanjay Misra', false,Category.Fiction)); 
    books.push(new Book('My Kempf','Adolf Hitler', true,Category.Biography));   
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
