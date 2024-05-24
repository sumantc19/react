import React, { useState } from 'react';
import "../App.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allentry, setAllentry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newentry = { email: email, password: password };

        setAllentry([...allentry, newentry]);
        setEmail("");
        setPassword("");
    }
  

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name='email'
                        id='email'
                        autoComplete='off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        autoComplete='off'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <div>
                {allentry.map((curelement, index) => {
                    return (
                        <div key={index}>
                            <p>{curelement.email}</p>
                            <p>{curelement.password}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Login;





















// import React, { useState } from 'react'

// const Login = () => {
//     const [email , setEmail] = useState("");
//     const [password,setPassword] = useState("");

//     const [ allentry,setAllentry] = useState([]);

//     const submitForm =(e)=>{
//         e.preventDefault()
//         const newentry = {email:email, password:password};

//         setAllentry([...allentry,newentry])
//     }
//   return (
//     <>
//      <form action="" onSubmit={submitForm}>
//         <div>
//             <label htmlFor="email">Email</label>
//             <input type="text" name='email' id='email' autoComplete='off' 
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             />
//         </div>
//         <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" name='password' id='password' autoComplete='off' 
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             />
//         </div>
//         <button type='submit'>Login</button>
//      </form>
//      <div>
//        {allentry.map=((curelement,index)=>{
//         return(
//             <div key={index}>
//                 <p>{curelement.email}</p>
//                 <p>{curelement.password}</p>
//             </div>
//         )

//        })}
//      </div>
//     </>
//   )
// }

// export default Login