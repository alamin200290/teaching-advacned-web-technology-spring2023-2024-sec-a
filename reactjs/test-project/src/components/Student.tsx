import { ReactNode } from "react";

interface Props{
    name: string,
    id: number,
    email: string,
    //myfunc: (item: string) => void
    children: ReactNode
}

function Student ({name, id, email, children}: Props){

    // let name: string;
    // let id: number;
    // let email: string;

    // props.name = 'alamin';
    // props.id = 1234;
    // props.email = 'alamina@aiub.edu'
    //myfunc(name);

    return(
        <>
            <div>
                <h1>Name: {name}</h1>
                <h1>ID: {id}</h1>
                <h1>Email: {email}</h1>
                {children}
            </div>
        </>
    )
}

export default Student;