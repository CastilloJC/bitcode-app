import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SwitchButton from './components/SwitchButton/SwitchButton';
import SelectWithOptions from './components/Select/SelectWithOptions';
import Results from './components/Results/Results';
import Pagination from './components/Pagination/Pagination';
import axios from 'axios';

export type OptionsButtons = 'All' | 'My faves';
export type OptionsToSelect = 'angular' | 'reactjs' | 'vuejs' | '';
export interface Response {
  author: string;
  created_at: string;
  story_title: string;
  story_url: string;
}

function App() {
  const [activeOption, setActiveOption] = useState<OptionsButtons>('All');
  const [page, setPage] = useState(0);
  const [selectedOption, setSelectedOption] = useState<OptionsToSelect>('');
  const [totalPages, setTotalPages] = useState(0);
  const [results, setResults] = useState<Response[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search_by_date?query=${selectedOption}&page=${page}&hitsPerPage=10`
        );
        const filteredResults = response.data.hits.filter(
          (result: Response) =>
            result.author && result.created_at && result.story_title && result.story_url
        );

        setResults(filteredResults);

        setTotalPages(response.data.nbPages);
      } catch (error) {
        console.error(error);
      }
    };

    if (activeOption === 'My faves') {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setResults(favorites);
    } else if (selectedOption !== '') {
      fetchData();
    } else {
      setResults([]);
    }
  }, [selectedOption, page, activeOption]);

  useLayoutEffect(() => {
    const storedOption = localStorage.getItem('selectedOption');
    const valueOption = storedOption ? JSON.parse(storedOption).value : '';
    console.log(storedOption);
    if (storedOption) {
      setSelectedOption(valueOption);
    }
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <SwitchButton setActiveOption={setActiveOption} activeOption={activeOption} />
        {activeOption === 'All' && (
          <div>
            <SelectWithOptions setOptionSelect={setSelectedOption} />
            <Results results={results} />
            {selectedOption && (
              <Pagination totalPages={totalPages} currentlyPage={page} setPage={setPage} />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
