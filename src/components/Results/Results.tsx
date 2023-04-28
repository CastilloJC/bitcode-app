import React, { FC } from 'react';
import { Response } from '../../App';
import ResultItem from './ResultItem';

interface ResultsProps {
  results: Response[];
}
const Results: FC<ResultsProps> = ({ results }) => {
  return (
    <div>
      {/* Results */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gridGap: '10px',
          marginTop: '20px',
        }}>
        {results.map((result, id) => (
          <ResultItem key={id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Results;
