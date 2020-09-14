import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Imports other components and hooks
 */
import BackgroundGlitch, {
  BackgroundGlitchPropTypes,
  BackgroundGlitchDefaultProps,
} from "../BackgroundGlitch";

/**
 * Defines the prop types
 */
const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape(BackgroundGlitchPropTypes.backgroundImage)
  ),
  sizes: PropTypes.shape(BackgroundGlitchPropTypes.backgroundSize),
};

/**
 * Defines the default props
 */
const defaultProps = {
  columns: [
    {
      sideOrCorner: "to left",
      colorStopList: [
        {
          color: "blue",
          stop: "0%",
        },
        {
          color: "blue",
          stop: "10%",
        },
        {
          color: "red",
          stop: "10%",
        },
        {
          color: "red",
          stop: "20%",
        },
      ],
    },
  ],
  sizes: [
    {
      width: 50,
      height: 50,
    },
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
  const { columns, sizes } = props;

  return (
    <Container className="BackgroundGlitchGenerator">
      <BackgroundGlitch backgroundImage={columns} backgroundSize={sizes} />
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
