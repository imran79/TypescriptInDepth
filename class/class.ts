import {Librarian} from '../interface/interface'

class ElementrySchoolLibrarian implements Librarian{
    
    doWork= () => console.log('This is Elementry School Librarian' );
}

export {ElementrySchoolLibrarian};
