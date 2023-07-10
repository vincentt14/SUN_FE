import { Link } from "react-router-dom";

const Button = ({ link, title, style }) => {
  return (
    <button type="button" className="mx-2">
      <Link to={link} className={`py-3 px-7 rounded-full ${style}`}>
        {title}
      </Link>
    </button>
  );
};

export default Button;
