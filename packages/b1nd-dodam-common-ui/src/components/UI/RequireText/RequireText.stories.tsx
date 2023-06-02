import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { RequireText } from ".";

export default {
  title: "Dodam Common UI/UI/Require Text",
  component: RequireText,
} as ComponentMeta<typeof RequireText>;

const Template: ComponentStory<typeof RequireText> = (args) => (
  <RequireText {...args} />
);

export const RequrieTextPrimary = Template.bind({});

RequrieTextPrimary.args = {
  children: "※ 시간은 24시간 형태로 작성해야합니다.",
};
