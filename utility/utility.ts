export namespace utility{
    
    export namespace feeUitility{
        
        export function calculateLateFees(numberOfDays : number) : number{
            return numberOfDays * 2.5;
        }
    }
}