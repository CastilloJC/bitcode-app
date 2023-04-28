import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SwitchButton from './components/SwitchButton/SwitchButton';
import SelectWithOptions from './components/Select/SelectWithOptions';
import Results from './components/Results/Results';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <SwitchButton />
        <SelectWithOptions />
        <Results />
      </div>
    </>
  );
}

export default App;
