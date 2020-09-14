import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Imports other components and hooks
 */
import BackgroundGlitch from "../BackgroundGlitch";
import BackgroundGlitchGenerator from "../BackgroundGlitchGenerator";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("section")((props) => ({
  display: "flex",
  flexDirection: "column",
}));

const Layer1 = styled("section")((props) => ({
  marginBottom: "10vh",
}));

const Layer2 = styled("section")((props) => ({}));

/**
 * Displays the component
 */
const Demo = (props) => {
  return (
    <Container className="Demo">
      <Layer1>
        BackgroundGlitchGenerator:
        <BackgroundGlitchGenerator />
      </Layer1>
      <Layer2>
        BackgroundGlitch:
        <BackgroundGlitch width="50%" height="50%" />
      </Layer2>
    </Container>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
