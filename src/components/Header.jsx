import React from 'react';

export default function Header() {

    return (
        <div className="App-header">
            <h1 className="App-logo">Jobu<span>Ten</span></h1>
            <ul>
                <li>Home</li>
                <li>Search Jobs</li>
                <li> About</li>
            </ul>
            <button>Log out</button>
        </div>
    )
}