import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SwitchButton from './components/SwitchButton/SwitchButton';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <SwitchButton />
      </div>
    </>
  );
}

export default App;
