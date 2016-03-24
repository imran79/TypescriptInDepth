
enum Category{"Fiction","Science","Biography","Children","History"};

class Book{    
    constructor(public id : number,public title : string, public author : string , public available : boolean, 
               public category : Category){
        
    }
   
}

class Customer{    
    constructor(public name : string , public age ?: number){
        
    }
}

const cutomers : Customer[] = [];

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

function CreateCustomerId(name : string , id : number) : string{    
    return name + id ;
}

// Optional Parameter
function CreateCustomer(name : string, age?: number){    
    cutomers.push(new Customer(name, age));
}

function getBookById(id : number) : Book {
    const books = getAllBooks();
   return (books.filter(book => book.id === id) && 
           books.filter(book => book.id === id).length > 0) ? 
           books.filter(book => book.id === id)[0] : null;
}

// Rest parameter ... before parameter name

function checkOutBooksByCutomer(name : string, ...bookIds : number[]) : void{
    
    console.log('Check out book by cutomer  ' + name );
    const checkoutBooks : Book[] = [];
    for(let bookid of bookIds){
        let book = getBookById(bookid);
        if(book && book.available){
            checkoutBooks.push(book);
        }        
    }  
    
}

/*Fuctions Overloading */

function getTitles(author : string) : string[];

function getTitles(category: Category) : string[];

function getTitles(criteria : any) : string[]{
    
    const books = getAllBooks();
    const titles : string[] = [];
    if(typeof criteria === 'string'){
        books.forEach(book =>
        { if(book.title === criteria){            
            titles.push(book.title);
        }          
             
        })
    }
    else if(typeof criteria === 'Category'){
        books.forEach(book =>
        { if(book.category === criteria){            
            titles.push(book.title);
        }  
    })
    }
    return titles;
}

const titleNames = getAllBooksTitlesByCategory(Category.Fiction);
logTitleNamesOfBooks(titleNames);

/****** Fat Arrow examples */

titleNames.forEach((val,idx,arr) => console.log(++idx + '-' + val));


/***Function Type Samples */

let createBookId : (name : string , id : number) => string;

createBookId = CreateCustomerId;
// this is work as delegate where function defination is same :)
console.log(createBookId("imran",1));