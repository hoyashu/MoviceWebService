import styled from '@emotion/styled';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

import { MovieProps } from '../../containers/MovieList';

const StyledMovie = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
`;

const imgStyle: React.CSSProperties = { width: '100%' };

function MovieListItem({ id, mediumCoverImage, title, summary, genres }: MovieProps) {
  return (
    <StyledMovie>
      <dl key={id} className="item">
        <div className="thumb">
          <img style={imgStyle} src={mediumCoverImage} alt="medium cover" />
        </div>
        <Link to={`/movie/${id}`}>{title}</Link>
        <dd>{summary}</dd>
        {genres.map((genre) => (
          <Tag key={genre}>{genre}</Tag>
        ))}
      </dl>
    </StyledMovie>
  );
}

export default MovieListItem;
