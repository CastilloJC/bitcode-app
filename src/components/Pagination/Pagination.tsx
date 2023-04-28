import React, { FC } from 'react';
import './Pagination.css';

interface PaginationProps {
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currentlyPage: number;
}

const Pagination: FC<PaginationProps> = ({ totalPages, currentlyPage, setPage }) => {
  const pageButtonsToShow = 10;
  const firstPageToShow =
    currentlyPage >= pageButtonsToShow ? currentlyPage - pageButtonsToShow + 1 : 0;
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}>
        <button
          className='button'
          disabled={currentlyPage === 0}
          onClick={() => setPage(currentlyPage - 1)}>
          {'<'}{' '}
        </button>
        {Array.from(Array(pageButtonsToShow).keys()).map(number => {
          const page = firstPageToShow + number + 1;
          if (page > totalPages) {
            return null;
          }
          return (
            <button
              className={currentlyPage === page - 1 ? 'button-selected' : 'button'}
              key={number}
              onClick={() => setPage(page - 1)}>
              {page}
            </button>
          );
        })}
        <button className='button' onClick={() => setPage(currentlyPage + 1)}>
          {'>'}{' '}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
