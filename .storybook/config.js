import {
  configure
} from "@storybook/react";
import {
  setAddon,
  addDecorator
} from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import {
  withKnobs,
  select
} from "@storybook/addon-knobs/react";
addDecorator(withKnobs);
setAddon(JSXAddon);

// Include global CSS and variables
import "../src/components/styles/root.scss";
import "../src/components/styles/fonts.scss";

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /.stories.tsx$/);

function loadStories() {
  require("./welcomeStory.tsx");
  console.log(req.keys());
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
