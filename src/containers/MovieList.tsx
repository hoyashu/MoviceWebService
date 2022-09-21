import { Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';

import Movie from '../component/Movie';
import { PATH } from '../routes/constant';

export type MovieProps = {
  id: number;
  mediumCoverImage: string;
  title: string;
  summary: string;
  descriptionFull?: string;
  genres: string[];
};

function MovieList() {
  // 로딩 여부
  const [loading, setLoading] = useState(true);

  // 영화 목록
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
    setMovies(
      json.data.movies.map(
        (movie: any) =>
          ({
            id: movie.id,
            mediumCoverImage: movie.medium_cover_image,
            title: movie.title,
            summary: movie.summary,
            descriptionFull: movie.description_full,
            genres: movie.genres,
          } as MovieProps),
      ),
    );
    setLoading(false);
  };

  // []를 비움으로 아무것도 주시하지 않으면서 맨 처음에만 실행시킨다.
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item href={PATH.HOME}>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Movie</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        {loading ? (
          <h1>Loding...</h1>
        ) : (
          <ul className="list">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                mediumCoverImage={movie.mediumCoverImage}
                title={movie.title}
                summary={`${movie.summary.substring(0, 100)} ...`}
                genres={movie.genres}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default MovieList;
