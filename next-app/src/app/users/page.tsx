
interface User{
    name: string;
    id: number;
}

export default async function AllUsers(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users', {next:{revalidate: 10}});
    const users: User[] = await res.json();
    return (
        <>
        <h1>List of users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}