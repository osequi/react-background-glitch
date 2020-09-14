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
     * The number of columns
     * @type {number}
     */
    number: PropTypes.number,
    /**
     * The widths of the columns.
     * It's usually 100% to cover the screen width
     * @type {array}
     */
    widths: PropTypes.arrayOf(PropTypes.string),
    /**
     * The heights of the columns
     * It's usually random, summing up to 100%
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
    number: 1,
    widths: ["100%"],
    heights: ["100%"],
    corners: ["to left"],
    angles: null,
  },
  palettes: [{ colors: ["red"], colorWidths: ["100%"] }],
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

  const backgroundSize =
    columns &&
    columns.map((item, index) => {
      const { widths, heights } = item;

      return { width: widths[index], height: heights[index] };
    });

  const colorStopLists =
    palettes &&
    palettes.map((item, index) => {
      const { colors, colorWidths } = item;

      return { color: colors[index], stop: colorWidths[index] };
    });

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
