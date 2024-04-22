'use client'
import { redirect, useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter();
  //redirect("/register");

  const newAccount = () => {
    router.push("/register");
    //router.back();
    //router.forward();
    
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Create New account? </p>
      <button onClick={newAccount}>Click Here</button>
    </div>
  )
}

export default Login;

