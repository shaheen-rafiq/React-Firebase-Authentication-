import React from 'react';

const Login=(props)=>{
    const{ 
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    setHasAccount,
    emailError,
    passwordError
    }=props;

    return(
       <section className="login">
        <div>
            <label>Username</label>
            <input 
                type='text' 
                autoFocus 
                required 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            
        </div>
       </section>
    )
}

export default Login;
