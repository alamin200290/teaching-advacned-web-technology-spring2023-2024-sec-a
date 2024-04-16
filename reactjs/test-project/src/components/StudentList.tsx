import { useState } from "react";
import Student from "./Student";

function StudentList(){
    const std = ['alamin', 'abc'];
    const [count, setCount] = useState(0);
    
    function addCount(){
        setCount(count+1);
    }

    function reduceCount(){
        setCount(count-1);
    }

    const testAlert = (item: string)=>{
        alert(item);
    }

    return(
        <>
            <div>
                {   
                    std.map((item)=>(
                        <Student key={item} name={item} id={1} email="alamin@aiub.edu">
                            <h3>CGPA</h3>
                        </Student>
                    ))
                }
                <button onClick={addCount}> + </button>
                <h2>{count}</h2>
                <button onClick={reduceCount}> - </button>
            </div>
        </>
    )
}

export default StudentList;