import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Imports props
 */
import { propTypes, defaultProps } from "./BackgroundGlitch.props";

/**
 * Imports logic
 */
import {
  generateBackgroundSizeCss,
  generateRandomBackgroundSizeCss,
} from "./BackgroundGlitch.logic";

/**
 * Styles the component container
 */
const Container = styled.section.attrs((props) => ({
  style: {
    backgroundSize: `${props.backgroundSizeCss}`,
  },
}))`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-repeat: no-repeat;
  background-image: repeating-linear-gradient(
      to left,
      blue 0%,
      blue 0.1%,
      red 0.1%,
      red 0.2%,
      lime 0.2%,
      lime 0.3%
    ),
    repeating-linear-gradient(
      to left,
      red 0%,
      red 0.1%,
      blue 0.1%,
      blue 0.2%,
      lime 0.2%,
      lime 0.3%
    ),
    repeating-linear-gradient(
      to left,
      blue 0%,
      blue 0.1%,
      red 0.1%,
      red 0.2%,
      lime 0.2%,
      lime 0.3%
    ),
    repeating-linear-gradient(
      to left,
      aqua 0%,
      aqua 0.1%,
      fuchsia 0.1%,
      fuchsia 0.2%,
      yellow 0.2%,
      yellow 0.3%
    ),
    repeating-linear-gradient(
      to left,
      aqua 0%,
      aqua 0.1%,
      yellow 0.1%,
      yellow 0.2%,
      fuchsia 0.2%,
      fuchsia 0.3%
    ),
    repeating-linear-gradient(
      to left,
      yellow 0%,
      yellow 0.1%,
      aqua 0.1%,
      aqua 0.2%,
      fuchsia 0.2%,
      fuchsia 0.3%
    ),
    repeating-linear-gradient(
      to left,
      white 0%,
      white 0.1%,
      black 0.1%,
      black 0.2%
    ),
    repeating-linear-gradient(
      to left,
      aqua 0%,
      aqua 0.1%,
      fuchsia 0.1%,
      fuchsia 0.2%
    ),
    repeating-linear-gradient(to left, red 0%, red 0.1%, lime 0.1%, lime 0.2%);
`;

/**
 * Displays the component
 */
const BackgroundGlitch = (props) => {
  const backgroundSizeCss = generateBackgroundSizeCss(props);

  return (
    <Container
      className="BackgroundGlitch"
      backgroundSizeCss={backgroundSizeCss}
    ></Container>
  );
};

BackgroundGlitch.propTypes = propTypes;
BackgroundGlitch.defaultProps = defaultProps;

export default BackgroundGlitch;
export {
  propTypes as BackgroundGlitchPropTypes,
  defaultProps as BackgroundGlitchDefaultProps,
};
