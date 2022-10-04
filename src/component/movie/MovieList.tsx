import styled from '@emotion/styled';
import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { MovieDetailProps } from '../../pages/movie/MovieDetailPage';
import { MovieListProps } from '../../pages/movie/MovieListPage';
import MovieDetail from './MovieDetail';
import { MovieGenres } from './MovieGenres';

type IsLoading = {
  loading: boolean;
  movies: MovieListProps[];
};

const StyledMovie = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
`;

const imgStyle: React.CSSProperties = { width: '100%' };

function MovieList({ loading, movies }: IsLoading) {
  return (
    <div>
      {loading ? (
        <h1>Loding...</h1>
      ) : (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="list">
          {movies.map((movie) => (
            <Col className="gutter-row" span={4} key={movie.id}>
              <StyledMovie>
                <dl key={movie.id} className="item">
                  <div className="thumb">
                    <img style={imgStyle} src={movie.mediumCoverImage} alt="medium cover" />
                  </div>
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  <dd>{movie.summary}</dd>
                  <dd>
                    <MovieGenres list={movie.genres} />
                  </dd>
                </dl>
              </StyledMovie>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
export default MovieList;
