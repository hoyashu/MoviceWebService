import styled from '@emotion/styled';
import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { MovieListProps } from '../../pages/movie/MovieListPage';
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
        <Row className="list">
          {movies.map((movie) => (
            <Col xs={20} sm={16} md={12} lg={8} xl={4} className="gutter-row" key={movie.id}>
              <StyledMovie>
                <dl key={movie.id} className="item">
                  <div className="thumb">
                    <img style={imgStyle} src={movie.mediumCoverImage} alt="medium cover" />
                  </div>
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  <dd>{movie.summary.length > 30 ? `${movie.summary.substr(0, 30)}...` : ''}</dd>
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
