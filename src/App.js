import React from 'react';
import './App.css';
import Slider from './Slider/index'

const IMAGES = [
  'https://images.unsplash.com/photo-1573506717624-05d1df8324cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1573506717854-d9b24b74d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1573508110033-d71193493a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1572380492053-f43f59891d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60',
];

function App() {
  return (
    <div className="App">
      <Slider images={IMAGES}/>
    </div>
  );
}

export default App;
