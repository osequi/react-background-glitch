import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Imports other components and hooks
 */
import BackgroundGlitch from "../BackgroundGlitch";

/**
 * Defines the prop types
 */
const propTypes = {
  cols: PropTypes.shape({
    /**
     * The widths of the columns.
     * It's usually 100% to cover the screen width
     * @type {array}
     */
    widths: PropTypes.arrayOf(PropTypes.string),
    /**
     * The heights of the columns
     * It's usually random, summing up to 100%
     * The items must be in an ascendent order
     * @example ['10%', '11%']
     * @type {array}
     */
    heights: PropTypes.arrayOf(PropTypes.string),
    /**
     * How the colors are displayed in a column
     * It's the `<side-or-corner>` prop of `repeating-linear-gradient`
     * @example 'to left'
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient
     * @type {array}
     */
    corners: PropTypes.arrayOf(PropTypes.string),
    /**
     * How the colors are displayed in a column
     * It's the `<angle>` prop of `repeating-linear-gradient`
     * @example '45deg'
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient
     * @type {array}
     */
    angles: PropTypes.arrayOf(PropTypes.string),
  }),
  /**
   * The color palettes for the columns
   * At least two colors and widths are needed. `red 100%` won't work alone but `red 0%, red 100%` will work fine
   * @type {array}
   */
  palettes: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The array of colors
       * @type {array}
       */
      colors: PropTypes.arrayOf(PropTypes.string),
      /**
       * The width of each color
       * It's usually random, summing up to 100%
       * @type {array}
       */
      colorWidths: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

/**
 * Defines the default props
 */
const defaultProps = {
  columns: {
    widths: ["100%", "100%", "40vw"],
    heights: ["50%", "70%", "100%"],
    corners: ["to left", "to right"],
    angles: null,
  },
  palettes: [
    { colors: ["red", "red"], colorWidths: ["0%", "100%"] },
    { colors: ["blue", "blue"], colorWidths: ["0%", "100%"] },
    { colors: ["green", "green"], colorWidths: ["0%", "100%"] },
  ],
};

/**
 * Styles the component container
 */
const Container = styled("div")((props) => ({}));

/**
 * Displays the component
 */
const BackgroundGlitchGenerator = (props) => {
  const { columns, palettes } = props;
  const { widths, heights, corners, angles } = columns;

  const nrOfColumns = Array(widths.length).fill("x");

  const backgroundSize =
    nrOfColumns &&
    nrOfColumns.map((item, index) => {
      return { width: widths[index], height: heights[index] };
    });

  //console.log("backgroundSize:", backgroundSize);

  const colorStopLists =
    palettes &&
    palettes.map((item) => {
      const { colors, colorWidths } = item;

      return (
        colors &&
        colors.map((item, index) => {
          return { color: colors[index], stop: colorWidths[index] };
        })
      );
    });

  //console.log("colorStopLists:", colorStopLists);

  const positions =
    nrOfColumns &&
    nrOfColumns.map((item, index) => {
      return corners && corners[index]
        ? corners[index]
        : angles && angles[index]
        ? angles[index]
        : "to left";
    });

  //console.log("positions:", positions);

  const backgroundImage =
    nrOfColumns &&
    nrOfColumns.map((item, index) => {
      return {
        sideOrCorner: positions[index],
        colorStopList: colorStopLists[index],
      };
    });

  console.log("backgroundImage:", backgroundImage);

  return (
    <Container className="BackgroundGlitchGenerator">
      <BackgroundGlitch
        backgroundImage={backgroundImage}
        backgroundSize={backgroundSize}
      />
    </Container>
  );
};

BackgroundGlitchGenerator.propTypes = propTypes;
BackgroundGlitchGenerator.defaultProps = defaultProps;

export default BackgroundGlitchGenerator;
export {
  propTypes as BackgroundGlitchGeneratorPropTypes,
  defaultProps as BackgroundGlitchGeneratorDefaultProps,
};
