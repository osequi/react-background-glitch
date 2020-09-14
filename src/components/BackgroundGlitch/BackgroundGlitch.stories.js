import React from "react";
import { storiesOf } from "@storybook/react";

import BackgroundGlitch from "./BackgroundGlitch";
import description from "./BackgroundGlitch.md";

storiesOf("BackgroundGlitch", module).add(
  "Overview",
  () => <BackgroundGlitch />,
  {
    notes: { markdown: description }
  }
);
