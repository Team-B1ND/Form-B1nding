import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DarkmodeButton } from ".";

export default {
  title: "Dodam Common UI/Darkmode Button",
  component: DarkmodeButton,
} as ComponentMeta<typeof DarkmodeButton>;

const Template: ComponentStory<typeof DarkmodeButton> = (args) => (
  <DarkmodeButton {...args} />
);

export const DarkPrimary = Template.bind({});

DarkPrimary.args = {
  onClick: () => {},
  isDark: true,
};

export const LightPrimary = Template.bind({});

LightPrimary.args = {
  onClick: () => {},
  isDark: false,
};
