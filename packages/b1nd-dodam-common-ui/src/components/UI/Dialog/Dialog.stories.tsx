import { ComponentStory } from "@storybook/react";
import React from "react";
import { useState } from "react";
import Dialog from "./Dialog";

export default {
  title: "Dodam Common UI/UI/Dialog",
  component: Dialog,
};

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Dialog State Change</button>
      <Dialog zIndex={2} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Title>정말 탈퇴하시겠습니까?</Dialog.Title>
        <Dialog.Content>
          <p>
            탈퇴하시면 회원님의 모든 기록이 삭제됩니다. 삭제된 정보는 복구할 수
            없으니 신중하게 결정해주세요.
          </p>
        </Dialog.Content>
        <Dialog.Buttons>
          <button className="submit">취소</button>
          <button className="error">탈퇴</button>
        </Dialog.Buttons>
      </Dialog>
    </>
  );
};

export const PrimaryDialog = Template.bind({});
