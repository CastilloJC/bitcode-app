import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SwitchButton from './components/SwitchButton/SwitchButton';
import SelectWithOptions from './components/Select/SelectWithOptions';
import Results from './components/Results/Results';
import Pagination from './components/Pagination/Pagination';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <SwitchButton />
        <SelectWithOptions />
        <Results />
        <Pagination />
      </div>
    </>
  );
}

export default App;
