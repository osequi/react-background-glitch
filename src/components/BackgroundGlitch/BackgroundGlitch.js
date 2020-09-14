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
  generateBackgroundImageCss,
} from "./BackgroundGlitch.logic";

/**
 * Styles the component container
 */
const Container = styled.section.attrs((props) => ({
  style: {
    backgroundSize: `${props.backgroundSizeCss}`,
    backgroundImage: `${props.backgroundImageCss}`,
  },
}))`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: black;
  background-repeat: no-repeat;
`;

/**
 * Displays the component
 */
const BackgroundGlitch = (props) => {
  const { width, height } = props;

  const backgroundSizeCss = generateBackgroundSizeCss(props);
  const backgroundImageCss = generateBackgroundImageCss(props);

  return (
    <Container
      className="BackgroundGlitch"
      width={width}
      height={height}
      backgroundSizeCss={backgroundSizeCss}
      backgroundImageCss={backgroundImageCss}
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
