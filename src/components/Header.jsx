import React from 'react';

export default function Header(props) {

    console.log(props)

    return (
        <div className="App-header">
            <h1 className="App-logo">Jobu<span>Ten</span></h1>
            <ul>
                <li onClick={() => props.onClick(0)}>Home</li>
                <li onClick={() => props.onClick(1)}>Search Jobs</li>
                <li onClick={() => props.onClick(2)}>About</li>
            </ul>
            <div>
                <button className="signin-btn">Sign In</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </div>
    )
}