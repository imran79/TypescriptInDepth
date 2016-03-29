import {Librarian} from '../interface/interface'

class UniversityLibrarian implements Librarian{
    name : string;
    email : string;
    department : string;
    assistCustomer = (custName : string) => console.log('this' + this.name + 'assist ' + custName);    
}

class ReferenceItem{ 
    
    private _publisherName : string;
    static departmentName : string = 'Research';
    constructor(public title : string, private year : number ){
        console.log('This is reference item');
    }
    
    printItem = () => {
        console.log(`${this.title} was published in ${this.year}`)
        console.log(`${ReferenceItem.departmentName} own it` )
    }
    
    get = ()  =>  this._publisherName;    
    set = (publisherName : string) => this._publisherName = publisherName;
}

export {UniversityLibrarian, ReferenceItem};