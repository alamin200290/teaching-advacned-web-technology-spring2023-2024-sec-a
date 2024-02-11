//console.log('hello JS');
"use strict"

/* var name = "alamin";
let id = 123;

let students = [1, 'alamin', 3.5];

const std = {
                name: 'alamin',
                id: 12,
                cgpa: 3.5
            };
std.xyz = '333';
std.id = 56;
//console.log(std['id']);

const f1 = (a, b=5)=>a+b;
//console.log(f1(1));

const ids = [1,4,5,6];
const newIds = [...ids, 101]; */
//console.log(newIds);

// const f2 = (...a)=>{
//     console.log(a);
// }

// f2(3,5,7,56,6);

// setTimeout(() => {
//     console.log('this is test 1');
// }, 2000);

// setTimeout(() => {
//     console.log('this is test 4');
// }, 4000);

// setTimeout(() => {
//     console.log('this is test 3');
// }, 3000);

// const f3 = ()=>{
//     setTimeout(() => {
//         console.log('this is test 3');
//     }, 3000);
// }


/* const f3 = (f)=>{
    setTimeout(() => {
        console.log("calling F1");
        f('job done');
    }, 3000);
    //f('job done');
} */

// f3((result)=>{
//     console.log('calling F5 with result:'+result);
// });

// const P1 = new Promise((resolve, reject) => {
    
// })

// console.log('test');


/* class Person {
    name;
    constructor (name){ 
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

class Student extends Person{
    id;
    constructor(name ,id){
        super(name);
        this.id = id;
    }
}

const s1 = new Student('alamin', 2);
console.log(s1.getName()); */

/* let check = true;
const test = new Promise((resolve, reject)=>{
    //console.log('testing if promise works');
    //setTimeout(()=>{
        if(check == true)
            resolve('testing my promise...')
        else
            reject(`can't keep promise`);
    //}, 3000);
});

test
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error)})
console.log('testing another task...'); */


// async function myfun(){
//     let result = await test(); 
//     console.log(result)
// }