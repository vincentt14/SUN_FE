import { Link } from "react-router-dom";

const CustomButton = ({ link, title, style, parentStyle }) => {
  return (
    <button type="button" className={`mx-2 ${parentStyle}`}>
      <Link to={link} className={`py-3 px-7 rounded-full ${style}`}>
        {title}
      </Link>
    </button>
  );
};

export default CustomButton;
