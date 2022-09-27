import styled from '@emotion/styled';
import { Rate, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { MovieDetailProps } from '../../containers/MovieDetail';

const StyledMovie = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
`;

function MovieDetailItem({
  id,
  mediumCoverImage,
  title,
  descriptionFull,
  genres,
  year,
  language,
  rating,
}: MovieDetailProps) {
  return (
    <StyledMovie>
      <dl key={id} className="item">
        <div className="thumb">
          <img src={mediumCoverImage} alt="medium cover" />
        </div>
        <dd>
          <Rate allowHalf value={rating / 2} />
        </dd>

        <dd>{descriptionFull}</dd>
        <dd>
          {genres.map((genre) => (
            <Tag key={genre}>{genre}</Tag>
          ))}
        </dd>
      </dl>
    </StyledMovie>
  );
}

export default MovieDetailItem;