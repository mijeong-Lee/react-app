import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams(); //Route path에 적어둔 변수명과 값을 가져온다
  const getMovieInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {
            <MovieInfo
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.description_intro}
              genres={movie.genres}
            />
          }
        </div>
      )}
    </div>
  );
}

export default Detail;
