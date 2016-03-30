import {
    Librarian
} from '../interface/interface'

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer = (custName: string) => console.log('this' + this.name + 'assist ' + custName);
}
//abstract class ReferenceItem 
class ReferenceItem{

    private _publisherName: string;
    static departmentName: string = 'Research';
    constructor(public title: string, protected year: number) {
        console.log('This is reference item');
    }

    printItem = () => {
        console.log(`${this.title} was published in ${this.year}`)
        console.log(`${ReferenceItem.departmentName} own it`)
    }


    get = () => this._publisherName;
    set = (publisherName: string) => this._publisherName = publisherName;

    //abstract printCitation(): void;
}


class Encyclopedia extends ReferenceItem {

    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem = () => {
        console.log('this is encyclopedia');
        console.log(`${this.title} is published in year ${this.year} edition ${this.edition}`)
    }

    printCitation(): void {
        console.log('this is print Citation');
        console.log(`${this.edition} .... ${this.edition}`);
    }
}

export {
    UniversityLibrarian,
    ReferenceItem,
    Encyclopedia
};