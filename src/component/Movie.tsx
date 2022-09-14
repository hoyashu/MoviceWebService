import { Link } from 'react-router-dom';
import { MovieProps } from '../containers/Home';

function Movie({ id, mediumCoverImage, title, summary, descriptionFull, genres }: MovieProps) {
  return (
    <dl key={id} className="item">
      <div>
        <img src={mediumCoverImage} alt="medium cover" />
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
  );
}

export default Movie;
