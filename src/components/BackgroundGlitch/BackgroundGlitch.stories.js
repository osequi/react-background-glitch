import React from "react";

import BackgroundGlitch from "./BackgroundGlitch";
import description from "./BackgroundGlitch.md";

export default {
  component: BackgroundGlitch,
  title: "BackgroundGlitch",
  parameters: { notes: ApiDoc },
};

const Template = (args) => <BackgroundGlitch {...args} />;

export const Default = Template.bind({});

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: "50vw",
  height: "30vh",
};
