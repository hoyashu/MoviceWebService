import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { MovieProps } from '../containers/MovieList';

const StyledMovie = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  border: #d3d3d338 3px solid;
`;

const imgStyle: React.CSSProperties = { width: '100%' };

function Movie({ id, mediumCoverImage, title, summary, descriptionFull, genres }: MovieProps) {
  return (
    <StyledMovie>
      <dl key={id} className="item">
        <div>
          <img style={imgStyle} src={mediumCoverImage} alt="medium cover" />
        </div>
        <Link to={`/movie/${id}`}>{title}</Link>
        <dd>{summary}</dd>
        <dd>{descriptionFull}</dd>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </dl>
    </StyledMovie>
  );
}

export default Movie;
