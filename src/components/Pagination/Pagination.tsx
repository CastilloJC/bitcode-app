import React, { FC, useState } from 'react';

interface PaginationProps {
  pageNumbers?: number;
  setPageNumbers?: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = () => {
  const [pageNumbers, setPageNumbers] = useState(5);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}>
        <button> {'<'} </button>
        {Array.from(Array(pageNumbers).keys()).map(number => (
          <button
            style={{
              border: '1px solid black',
              borderRadius: '10px',
              cursor: 'pointer',
              margin: '0 5px',
              padding: '5px 10px',
            }}
            key={number}>
            {number + 1}
          </button>
        ))}
        <button> {'>'} </button>
      </div>
    </div>
  );
};

export default Pagination;
