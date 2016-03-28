import {Category} from '../enum';
interface Book{    
     id : number,
     title : string,
     author : string , 
     available : boolean, 
     category : Category     
       
}

interface Customer{    
     name : string ,  
     age ?: number   
    
}

export {Book, Customer} ;