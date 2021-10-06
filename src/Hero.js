import React from "react";

const Hero = (props) =>{
    const {handleLogout,user}=props
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Log Out</button>
            </nav>
            <p>
                <h6>Your user is </h6>
                <h6>{user}</h6>
            </p>
        </section> 
    )
}

export default Hero;