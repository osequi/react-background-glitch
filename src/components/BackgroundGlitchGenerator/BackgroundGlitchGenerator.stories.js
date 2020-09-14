import React from "react";
import { storiesOf } from "@storybook/react";

import BackgroundGlitchGenerator from "./BackgroundGlitchGenerator";
import description from "./BackgroundGlitchGenerator.md";

storiesOf("BackgroundGlitchGenerator", module).add(
  "Overview",
  () => <BackgroundGlitchGenerator />,
  {
    notes: { markdown: description }
  }
);
