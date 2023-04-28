import React, { FC } from 'react';
import { OptionsButtons, Response } from '../../App';
import ResultItem from './ResultItem';

interface ResultsProps {
  results: Response[];
  option: OptionsButtons;
}
const Results: FC<ResultsProps> = ({ results, option }) => {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gridGap: '10px',
          marginTop: '20px',
        }}>
        {results.map((result, id) => (
          <ResultItem key={id} result={result} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Results;
