import styled from '@emotion/styled';
import { Button, Rate } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import MovieDetailPage, { MovieDetailProps } from '../../pages/movie/MovieDetailPage';
import { PATH } from '../../routes/constant';
import { MovieGenres } from './MovieGenres';

type IsLoading = {
  loading: boolean;
  movieDetail: MovieDetailProps;
};

const StyledMovie = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
`;

function MovieDetail({ loading, movieDetail }: IsLoading) {
  const navigate = useNavigate();

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>{movieDetail.title}</h1>
          <StyledMovie>
            <dl className="item">
              <div className="thumb">
                <img src={movieDetail.mediumCoverImage} alt="medium cover" />
              </div>
              <dd>
                <Rate allowHalf value={movieDetail.rating / 2} />
              </dd>

              <dd>{movieDetail.descriptionFull}</dd>
              <dd>
                <MovieGenres list={movieDetail.genres} />
              </dd>
            </dl>
          </StyledMovie>
          <Button type="default" onClick={() => navigate(PATH.MOVIELIST)}>
            Go to List
          </Button>
        </>
      )}
    </div>
  );
}
export default MovieDetail;
