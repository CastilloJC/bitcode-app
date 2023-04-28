import axios from 'axios';
import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { timeAgo } from '../utils/utils';

const resultCardStyle = {
  border: '1px solid black',
  borderRadius: '10px',
  display: 'flex',
  cursor: 'pointer',
};
interface Response {
  author: string;
  created_at: string;
  story_title: string;
  story_url: string;
}

interface ResultsProps {
  query?: string;
  page?: number;
}
const Results: FC<ResultsProps> = ({ query }) => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [results, setResults] = useState<Response[]>([]);
  const [favorite, setFavorite] = useState<boolean>(false);

  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=${page}&hitsPerPage=${perPage}`
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
    fetchData();
  }, []);

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
          <div key={id} style={resultCardStyle}>
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
              onClick={() => setFavorite(!favorite)}>
              <img
                src={favorite ? '/icons/heart.svg' : '/icons/heartemp.svg'}
                alt='hearth'
                width='40px'
                height='40px'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
