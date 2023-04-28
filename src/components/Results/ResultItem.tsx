import React, { FC, useEffect, useRef, useState } from 'react';
import { timeAgo } from '../utils/utils';
import { OptionsButtons, Response } from '../../App';
import { useAppContext } from '../Context/AppContext/AppContext';

const resultCardStyle = {
  border: '1px solid black',
  borderRadius: '10px',
  display: 'flex',
  cursor: 'pointer',
};

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
    }

    if (option === 'All' && !isFavorite) {
      console.log('add');
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

  // useEffect(() => {
  //   const storedFavorites = localStorage.getItem('favorites');
  //   if (storedFavorites) {
  //     dispatch({ type: 'ADD_FAVORITE', payload: JSON.parse(storedFavorites) });
  //   }
  // }, [dispatch]);
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
