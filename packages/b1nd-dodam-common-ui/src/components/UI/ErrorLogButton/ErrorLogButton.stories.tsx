import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ErrorLogButton from ".";

export default {
  title: "Dodam Common UI/UI/ErrorLog Button",
  component: ErrorLogButton,
} as ComponentMeta<typeof ErrorLogButton>;

const Template: ComponentStory<typeof ErrorLogButton> = (args) => (
  <ErrorLogButton {...args} />
);

export const ErrorPrimary = Template.bind({});

ErrorPrimary.args = {
  onClick: () => {},
};
