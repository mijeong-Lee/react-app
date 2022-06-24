import PropTypes from "prop-types";
import styles from "./Button.module.css";
//css도 모듈처럼 사용할 수 있다.
//화면에서는 랜덤한 클래스네임으로 생성되므로 동일한 class이름으로 다른파일에서도 사용할 수 있다
function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
