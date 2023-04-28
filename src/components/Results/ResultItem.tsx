import React, { FC, useState } from 'react';
import { timeAgo } from '../utils/utils';
import { Response } from '../../App';
const resultCardStyle = {
  border: '1px solid black',
  borderRadius: '10px',
  display: 'flex',
  cursor: 'pointer',
};

interface ResultItemProps {
  result: Response;
}
const ResultItem: FC<ResultItemProps> = ({ result }) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div style={resultCardStyle}>
      <div
        style={{
          width: '80%',
          padding: '15px',
          maxHeight: '80px',
        }}>
        <div
          style={{
            display: 'flex',
            gap: 10,
            alignItems: 'center',
          }}>
          <img src='/icons/clock.png' alt='clock' width='20px' height={20} />
          <span>
            {timeAgo(result.created_at)} by {result.author}
          </span>
        </div>
        <h4>{result.story_title}</h4>
      </div>

      <div
        style={{
          width: '20%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#F4F4F4',
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
        onClick={() => handleFavorite()}>
        <img
          src={favorite ? '/icons/heart.svg' : '/icons/heartemp.svg'}
          alt='hearth'
          width='40px'
          height='40px'
        />
      </div>
    </div>
  );
};

export default ResultItem;
