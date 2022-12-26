import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import Modal from ".";

export default {
  title: "Dodam Common UI/Modal",
  components: Modal,
};

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Modal State Change</button>
      <Modal {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export const PrimaryModal = Template.bind({});

PrimaryModal.args = {
  width: 600,
  height: 500,
  zIndex: 10,
  children: <>Modal</>,
  customStyle: { padding: 20 },
};
