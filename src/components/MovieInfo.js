import PropTypes from "prop-types";

//props-부모 컴포넌트에서 받아온다
function MovieInfo({ coverImg, title, year, summary, genres }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td colSpan={"2"}>
              <img src={coverImg} alt={title} />
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <th>{"title"}</th>
                    <td>
                      {title} ({year})
                    </td>
                  </tr>
                  <tr>
                    <th>{"summary"}</th>
                    <td>{summary}</td>
                  </tr>
                  <tr>
                    <th>{"genres"}</th>
                    <td>
                      {genres.map((g) => (
                        <li key={g}>{g}</li>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

//자료형 및 필수여부 지정
MovieInfo.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieInfo;
