import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Movie from '../component/Movie';
import Button from '../component/button/button';
import Layout from '../component/Layout/Layout';

// useParams : 주소에서 변화하는 값(파라미터 값)을 가져와주는 컴포넌트

type MovieDetailProps = {
  id: number;
  mediumCoverImage: string;
  title: string;
  summary: string;
  genres: string[];
};

function MovieDetail() {
  // 로딩 여부
  const [loading, setLoading] = useState<boolean>(true);

  // 영화 정보
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>({
    mediumCoverImage: '',
    genres: [],
    id: 0,
    summary: '',
    title: '',
  });

  // const id = useParams();
  // console.log(id)

  // 파라미터의 이름(key 값)을 알고 있다면 아래와 같은 작성법으로 바로 값을 가져올 수 있다
  const { id } = useParams();

  const getMovieDetail = async (movieDetailId: string) => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieDetailId}`)).json();
    setMovieDetail({
      id: json.data.movie.id,
      mediumCoverImage: json.data.movie.medium_cover_image,
      title: json.data.movie.title,
      summary: json.data.movie.summary,
      genres: json.data.movie.genres,
    } as MovieDetailProps);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      void getMovieDetail(id);
    }
  }, [id]);
  const onClick = () => {
    const joinHello = 0;
    console.log(joinHello);
  };
  return (
    <Layout>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>Detail</h1>
            <Movie
              key={movieDetail.id}
              id={movieDetail.id}
              mediumCoverImage={movieDetail.mediumCoverImage}
              title={movieDetail.title}
              summary={movieDetail.summary}
              genres={movieDetail.genres}
            />

            <Link to="/">
              <Button onClick={() => onClick()} width={100}>
                <div>목록으로 이동</div>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
export default MovieDetail;
