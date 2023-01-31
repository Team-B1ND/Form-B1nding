import { ComponentStory } from "@storybook/react";
import React from "react";
import { Flex } from ".";

export default {
  title: "Dodam Common UI/Layout/Flex",
  component: Flex,
};

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const JustifyStartFlex = Template.bind({});

JustifyStartFlex.args = {
  customStyle: {
    width: 300,
    height: 50,
    border: "1px solid black",
  },
  justify: "start",
  gap: 20,
  align: "center",
  direction: "row",
  children: (
    <>
      <button>a</button>
      <button>b</button>
      <button>c</button>
    </>
  ),
};

export const JustifyCenterFlex = Template.bind({});

JustifyCenterFlex.args = {
  customStyle: {
    width: 300,
    height: 50,
    border: "1px solid black",
  },
  justify: "center",
  gap: 20,
  align: "center",
  direction: "row",
  children: (
    <>
      <button>a</button>
      <button>b</button>
      <button>c</button>
    </>
  ),
};

export const JustifyEndFlex = Template.bind({});

JustifyEndFlex.args = {
  customStyle: {
    width: 300,
    height: 50,
    border: "1px solid black",
  },
  justify: "end",
  gap: 20,
  align: "center",
  direction: "row",
  children: (
    <>
      <button>a</button>
      <button>b</button>
      <button>c</button>
    </>
  ),
};

export const JustifyAroundFlex = Template.bind({});

JustifyAroundFlex.args = {
  customStyle: {
    width: 300,
    height: 50,
    border: "1px solid black",
  },
  justify: "around",
  align: "center",
  direction: "row",
  children: (
    <>
      <button>a</button>
      <button>b</button>
      <button>c</button>
    </>
  ),
};

export const JustifyBetweenFlex = Template.bind({});

JustifyBetweenFlex.args = {
  customStyle: {
    width: 300,
    height: 50,
    border: "1px solid black",
  },
  justify: "between",
  align: "center",
  direction: "row",
  children: (
    <>
      <button>a</button>
      <button>b</button>
      <button>c</button>
    </>
  ),
};
