import {Category} from '../enum';

interface Book{    
     id : number,
     title : string,
     author : string , 
     available : boolean, 
     category : Category,
     pages ?: number,
     markedDamaged ?: DamageLogger 
       
}

interface DamageLogger{
    
    (message : string ) : void;
}

interface Customer{    
     name : string ,  
     age ?: number   
    
}

interface LibraryResource{
    catalogNumber : number
}

interface Encyclopedia extends LibraryResource, Book{
    
}

interface Librarian{    
    assistCustomer : (custName : string) => void;
}
export {Book, DamageLogger as logger,Customer,Librarian } ;