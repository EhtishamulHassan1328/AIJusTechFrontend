import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './pages/navbar.js'; 
import Mainbox from './pages/mainbox.js';
import Features from './pages/features.js';
import './style.css';

function App() {
    return (
        <div>
            <Navbar />
            <Mainbox/>
            <Features/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
