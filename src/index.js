import React from 'react';
import ReactDOM from 'react-dom/client';
import {choice, remove} from './helpers';
import foodArray from './foods';



const App = () => {
    
    const fruit=choice(foodArray);
    let remaining =remove(foodArray, fruit)
  
    return (
        <>
            <p>I'd like one {fruit}, please</p>
            <p>Here you go: {fruit}</p>
            <p>Delicious! May I have another?</p>
            <p>I'm sorry, we're all out. We have {remaining.length} left.</p>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
