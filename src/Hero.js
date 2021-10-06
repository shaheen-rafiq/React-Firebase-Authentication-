import React from "react";

const Hero = (props) =>{
    const {handleLogout,email}=props;
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Log Out</button>
            </nav>
            <p>
                <h3 className="bodytext">Your email ID is: {email}</h3>
            </p>
        </section> 
    )
}

export default Hero;