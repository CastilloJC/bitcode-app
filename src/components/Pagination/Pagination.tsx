import React, { FC } from 'react';

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
          style={{
            border: '1px solid #B5B5B5',
            borderRadius: '10px',
            cursor: 'pointer',
            margin: '0 5px',
            padding: '5px 10px',
            background: 'white',
          }}
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
              style={{
                border: '1px solid #B5B5B5',
                borderRadius: '10px',
                cursor: 'pointer',
                margin: '0 5px',
                padding: '5px 10px',
                background: currentlyPage === page - 1 ? '#1890FF' : 'white',
                color: currentlyPage === page - 1 ? 'white' : 'black',
              }}
              key={number}
              onClick={() => setPage(page - 1)}>
              {page}
            </button>
          );
        })}
        <button
          style={{
            border: '1px solid #B5B5B5',
            borderRadius: '10px',
            cursor: 'pointer',
            margin: '0 5px',
            padding: '5px 10px',
            background: 'white',
          }}
          onClick={() => setPage(currentlyPage + 1)}>
          {'>'}{' '}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
