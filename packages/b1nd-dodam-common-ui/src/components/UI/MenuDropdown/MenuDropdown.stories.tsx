import { ComponentStory } from "@storybook/react";
import React from "react";
import { MenuDropdown } from ".";

export default {
  title: "Dodam Common UI/UI/MenuDropdown",
  components: MenuDropdown,
};

const Template: ComponentStory<typeof MenuDropdown> = (args) => (
  <MenuDropdown {...args} />
);

export const PrimaryLargeMenuDropdown = Template.bind({});

PrimaryLargeMenuDropdown.args = {
  sizeType: "lg",
  onDelete: () => {},
  onModify: () => {},
};

export const PrimaryMediumMenuDropdown = Template.bind({});

PrimaryMediumMenuDropdown.args = {
  sizeType: "md",
  onDelete: () => {},
  onModify: () => {},
};
