// import PropTypes from "prop-types";

// Button.propTypes = {
//   styles: PropTypes.string.isRequired,
// };

//eslint-disable-next-line
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px]
       text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
