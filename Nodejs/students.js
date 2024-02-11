export default class Student {
    stdName;
    stdId;

    constructor (stdName, stdId){
        this.stdName = stdName;
        this.stdId = stdId;
    }

    getName(){
        return this.stdName;
    }
}