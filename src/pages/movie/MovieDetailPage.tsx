import { Breadcrumb, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PATH } from '../../routes/constant';
import MovieDetail from './element/MovieDetail';

// useParams : 주소에서 변화하는 값(파라미터 값)을 가져와주는 컴포넌트

export type MovieDetailProps = {
  id: number;
  mediumCoverImage: string;
  title: string;
  descriptionFull: string;
  genres: string[];
  language: string;
  rating: number;
  year: number;
};

function MovieDetailPage() {
  // 로딩 여부
  const [loading, setLoading] = useState<boolean>(true);

  // 영화 정보
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>({
    language: '',
    rating: 0,
    year: 0,
    mediumCoverImage: '',
    genres: [],
    id: 0,
    descriptionFull: '',
    title: '',
  });

  const navigate = useNavigate();

  // 파라미터의 이름(key 값)을 알고 있다면 아래와 같은 작성법으로 바로 값을 가져올 수 있다
  const { id } = useParams();

  const getMovieDetail = async (movieDetailId: string) => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieDetailId}`)).json();
    setMovieDetail({
      id: json.data.movie.id,
      mediumCoverImage: json.data.movie.medium_cover_image,
      title: json.data.movie.title,
      descriptionFull: json.data.movie.description_full,
      genres: json.data.movie.genres,
      language: json.data.movie.language,
      rating: json.data.movie.rating,
      year: json.data.movie.year,
    } as MovieDetailProps);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getMovieDetail(id);
    }
  }, [id]);
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Movie</Breadcrumb.Item>
        <Breadcrumb.Item>{movieDetail.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1>{movieDetail.title}</h1>
            <MovieDetail
              key={movieDetail.id}
              id={movieDetail.id}
              mediumCoverImage={movieDetail.mediumCoverImage}
              title={movieDetail.title}
              descriptionFull={movieDetail.descriptionFull}
              genres={movieDetail.genres}
              language={movieDetail.language}
              rating={movieDetail.rating}
              year={movieDetail.year}
            />
            <Button type="default" onClick={() => navigate(PATH.MOVIELIST)}>
              Go to List
            </Button>
          </>
        )}
      </div>
    </>
  );
}
export default MovieDetailPage;
