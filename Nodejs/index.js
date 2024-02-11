//import Student from "./students.js";

//const student = new Student('Alamin', '12-2124-2');
//console.log(student.getName());

// import path from "path";

// //console.log(path.basename(__filename));
// //console.log(__direname);
// //console.log(__filename);
// const abc= "c://abc/xyz/abc.js";
// console.log(path.extname(abc));

import http from "http";

const server = http.createServer((req, res)=>{
    res.setHeader('Content-type', 'text/html');
    if(req.url == '/home'){
        res.end('<h1>Welcome home!</h1>');
    }
    if(req.url == '/login'){
        res.end('<h1>Lets login!</h1>');
    }
});

server.listen(3000, ()=>{
    console.log(`server started at 3000 port`);
})

