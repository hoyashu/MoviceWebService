import { Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';

import MovieList from '../../component/movie/MovieList';

export type MovieListProps = {
  id: number;
  mediumCoverImage: string;
  title: string;
  summary: string;
  genres: string[];
};
function MovieListPage() {
  // 로딩 여부
  const [loading, setLoading] = useState(true);

  // 영화 목록
  const [movies, setMovies] = useState<MovieListProps[]>([]);

  // async - promise를 반환한다.
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
            genres: movie.genres,
          } as MovieListProps),
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
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Movie</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <MovieList loading={loading} movies={movies} />
      </div>
    </>
  );
}

export default MovieListPage;
