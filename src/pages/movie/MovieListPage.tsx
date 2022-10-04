import { Breadcrumb, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';

import { PATH } from '../../routes/constant';
import MovieList from './element/MovieList';

export type MovieProps = {
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
  const [movies, setMovies] = useState<MovieProps[]>([]);

  // async - promise를 반환한다.
  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
    console.log(json);
    setMovies(
      json.data.movies.map(
        (movie: any) =>
          ({
            id: movie.id,
            mediumCoverImage: movie.medium_cover_image,
            title: movie.title,
            summary: movie.summary,
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
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="list">
            {movies.map((movie) => (
              <Col className="gutter-row" span={4} key={movie.id}>
                <MovieList
                  id={movie.id}
                  mediumCoverImage={movie.mediumCoverImage}
                  title={movie.title}
                  summary={`${movie.summary.substring(0, 100)} ...`}
                  genres={movie.genres}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default MovieListPage;
