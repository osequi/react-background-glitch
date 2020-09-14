import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  /**
   * The background size array
   * @type {array}
   */
  backgroundSize: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ),
};

/**
 * Defines the default props
 */
const defaultProps = {
  width: "100vw",
  height: "100vh",
  backgroundSize: [
    {
      width: 100,
      height: 10,
    },
    {
      width: 100,
      height: 20,
    },
    {
      width: 100,
      height: 30,
    },
    {
      width: 100,
      height: 40,
    },
    {
      width: 100,
      height: 50,
    },
    {
      width: 100,
      height: 60,
    },
    {
      width: 100,
      height: 70,
    },
    {
      width: 100,
      height: 80,
    },
    {
      width: 100,
      height: 90,
    },
  ],
};

export { propTypes, defaultProps };
