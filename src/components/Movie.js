import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//props-부모 컴포넌트에서 받아온다
function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        {/** Link to=""를 사용하면 새로고침없이 페이지 이동이 가능하다 */}
        <Link to={`/movie/${id}`}>
          {title} ({year})
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

//자료형 및 필수여부 지정
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
