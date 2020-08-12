//variable
let firstname: string;


//array
var list: number[] = [1,2,3];
var list1: Array<number> = [2,3,4]; // generic array

//tuple
let tup: [number, string] = [1, 'Hello'];

//interface
interface Calc{
    add(first: number, second: number): number;
}

let calc1: Calc = {
    add(first: number, second: number){
        return first + second;
    }
}

//class
class Member{
    id: number;
    memberName: string;

    constructor(m_id: number, m_name: string){
        this.id = m_id;
        this.memberName = m_name;
    }

    show(): void{
        console.log(this.id + " " + this.memberName);
    }
}