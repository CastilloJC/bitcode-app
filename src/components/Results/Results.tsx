import React, { FC } from 'react';
import { OptionsButtons, Response } from '../../App';
import ResultItem from './ResultItem/ResultItem';
import './Results.css';

interface ResultsProps {
  results: Response[];
  option: OptionsButtons;
}
const Results: FC<ResultsProps> = ({ results, option }) => {
  return (
    <div className='results-container'>
      {results.map((result, id) => (
        <ResultItem key={id} result={result} option={option} />
      ))}
    </div>
  );
};

export default Results;
