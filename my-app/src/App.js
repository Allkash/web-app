import React from 'react';
import './App.css'; 
import Profile from './Profile';

function App() {
    return (
        <div className="App">
            <Profile />
            <h1>Hello, World!</h1>
            <>
                {Array(9).fill().map((_, index) => (
                    <button key={index}>
                        Button {index + 1}
                    </button>
                ))}
            </>
        </div>
    );
}
function MyButton() {
    <img className="avatar" />
    return <button>pidr</button>;
}

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};


export default App;