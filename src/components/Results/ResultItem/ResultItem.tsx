import React, { FC, useEffect, useRef, useState } from 'react';

import './ResultItem.css';
import { OptionsButtons, Response } from '../../../App';
import { useAppContext } from '../../Context/AppContext/AppContext';
import { timeAgo } from '../../utils/utils';

interface ResultItemProps {
  result: Response;
  option: OptionsButtons;
}
const ResultItem: FC<ResultItemProps> = ({ result, option }) => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const { state, dispatch } = useAppContext();
  const prevFavorites = useRef(state.favorites);

  const isFavorite = state.favorites.find(favorite => favorite.objectID === result.objectID);

  const handleFavorite = () => {
    if (option === 'My faves' || isFavorite) {
      dispatch({
        type: 'DELETE_FAVORITE',
        payload: result,
      });
      if (state.favorites.length === 1) {
        localStorage.removeItem('favorites');
      }
    }

    if (option === 'All' && !isFavorite) {
      dispatch({
        type: 'ADD_FAVORITE',
        payload: result,
      });
    }

    setFavorite(!favorite);
  };

  useEffect(() => {
    if (prevFavorites.current !== state.favorites) {
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
      prevFavorites.current = state.favorites;
    }
  }, [state.favorites]);

  return (
    <div className='result-item'>
      <div
        style={{
          width: '80%',
          padding: '15px',
          maxHeight: '80px',
        }}
        onClick={() => window.open(result.story_url)}>
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

      <div className='box-heart' onClick={() => handleFavorite()}>
        <img
          src={option === 'My faves' || isFavorite ? '/icons/heart.svg' : '/icons/heartemp.svg'}
          alt='hearth'
          width='40px'
          height='40px'
        />
      </div>
    </div>
  );
};

export default ResultItem;
