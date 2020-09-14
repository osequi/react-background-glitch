import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The width of the background
   * @type {string}
   */
  width: PropTypes.string,
  /**
   * The height of the background
   * @type {string}
   */
  height: PropTypes.string,
  /**
   * The `background-size` array
   * @type {array}
   */
  backgroundSize: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ),
  /**
   * The `background-image` array with values for `repeating-linear-gradient`
   * @type {array}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient
   */
  backgroundImage: PropTypes.arrayOf(
    PropTypes.shape({
      sideOrCorner: PropTypes.string,
      angle: PropTypes.string,
      colorStopList: PropTypes.arrayOf(
        PropTypes.shape({ color: PropTypes.string, stop: PropTypes.string })
      ),
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
  backgroundImage: [
    {
      sideOrCorner: "to left",
      colorStopList: [
        {
          color: "blue",
          stop: "0%",
        },
        {
          color: "blue",
          stop: "0.1%",
        },
        {
          color: "red",
          stop: "0.1%",
        },
        {
          color: "red",
          stop: "0.2%",
        },
        {
          color: "lime",
          stop: "0.2%",
        },
        {
          color: "lime",
          stop: "0.3%",
        },
      ],
    },
    {
      sideOrCorner: "to left",
      colorStopList: [
        {
          color: "red",
          stop: "0%",
        },
        {
          color: "red",
          stop: "0.1%",
        },
        {
          color: "blue",
          stop: "0.1%",
        },
        {
          color: "blue",
          stop: "0.2%",
        },
        {
          color: "lime",
          stop: "0.2%",
        },
        {
          color: "lime",
          stop: "0.3%",
        },
      ],
    },
    {
      sideOrCorner: "to left",
      colorStopList: [
        {
          color: "blue",
          stop: "0%",
        },
        {
          color: "blue",
          stop: "0.1%",
        },
        {
          color: "red",
          stop: "0.1%",
        },
        {
          color: "red",
          stop: "0.2%",
        },
        {
          color: "lime",
          stop: "0.2%",
        },
        {
          color: "lime",
          stop: "0.3%",
        },
      ],
    },
    {
      sideOrCorner: "to left",
      colorStopList: [
        {
          color: "aqua",
          stop: "0%",
        },
        {
          color: "aqua",
          stop: "0.1%",
        },
        {
          color: "fuchsia",
          stop: "0.1%",
        },
        {
          color: "fuchsia",
          stop: "0.2%",
        },
        {
          color: "yellow",
          stop: "0.2%",
        },
        {
          color: "yellow",
          stop: "0.3%",
        },
      ],
    },
    {
      sideOrCorner: "to left",
      colorStopList: [
        {
          color: "aqua",
          stop: "0%",
        },
        {
          color: "aqua",
          stop: "0.1%",
        },
        {
          color: "yellow",
          stop: "0.1%",
        },
        {
          color: "yellow",
          stop: "0.2%",
        },
        {
          color: "fuchsia",
          stop: "0.2%",
        },
        {
          color: "fuchsia",
          stop: "0.3%",
        },
      ],
    },
    {
      sideOrCorner: "to left",
      colorStopList: [
        {
          color: "yellow",
          stop: "0%",
        },
        {
          color: "yellow",
          stop: "0.1%",
        },
        {
          color: "aqua",
          stop: "0.1%",
        },
        {
          color: "aqua",
          stop: "0.2%",
        },
        {
          color: "fuchsia",
          stop: "0.2%",
        },
        {
          color: "fuchsia",
          stop: "0.3%",
        },
      ],
    },
    {
      sideOrCorner: "to left",
      colorStopList: [
        {
          color: "white",
          stop: "0%",
        },
        {
          color: "white",
          stop: "0.1%",
        },
        {
          color: "black",
          stop: "0.1%",
        },
        {
          color: "black",
          stop: "0.2%",
        },
      ],
    },
    {
      sideOrCorner: "to left",
      colorStopList: [
        {
          color: "aqua",
          stop: "0%",
        },
        {
          color: "aqua",
          stop: "0.1%",
        },
        {
          color: "fuchsia",
          stop: "0.1%",
        },
        {
          color: "fuchsia",
          stop: "0.2%",
        },
      ],
    },
  ],
};

export { propTypes, defaultProps };
