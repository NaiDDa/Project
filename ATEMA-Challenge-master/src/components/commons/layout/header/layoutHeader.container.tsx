import { useState } from "react";
import LayoutHeaderUI from "./layoutHeader.presenter";

export default function LayoutHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickNavi = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <LayoutHeaderUI
      onClickNavi={onClickNavi}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
}
