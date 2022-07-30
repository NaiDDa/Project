import { useState } from "react";
import MainUI from "./mainPage.presenter";

export default function Main() {
  // 가공 방식 체크박스
  const [Methodfillter, setMethodfillter] = useState([]);
  const [isMethod, setIsMethod] = useState(false);
  // 재료 체크박스
  const [Materialfillter, setMaterialfillter] = useState([]);
  const [isMaterial, setIsMaterial] = useState(false);
  // 토글
  const [cheked, setCheckd] = useState(false);
  const onClickMethod = () => {
    setIsMethod((prev) => !prev);
    setIsMaterial(false);
  };
  const onClickMaterial = () => {
    setIsMaterial((prev) => !prev);
    setIsMethod(false);
  };

  //! 가공 방식 체크박스
  const onClickMethodList = (name) => (event) => {
    if (event.currentTarget.checked) {
      setMethodfillter([...Methodfillter, name]);
      console.log("체크 반영 완료");
    } else {
      setMethodfillter(Methodfillter.filter((el) => el !== name));
      console.log("체크 해제 반영 완료");
    }
  };

  //! 재료 체크박스
  const onClickMaterialList = (name) => (event) => {
    if (event.currentTarget.checked) {
      setMaterialfillter([...Materialfillter, name]);
      console.log("체크 반영 완료");
    } else {
      setMaterialfillter(Materialfillter.filter((el) => el !== name));
      console.log("체크 해제 반영 완료");
    }
  };
  const onClickRefresh = () => {
    setMaterialfillter([]);
    setMethodfillter([]);
  };

  //! 토글 버튼
  const onChangechked = () => {
    setCheckd((prev) => !prev);
  };

  return (
    <MainUI
      isMethod={isMethod}
      isMaterial={isMaterial}
      onClickMethod={onClickMethod}
      onClickMaterial={onClickMaterial}
      onClickMethodList={onClickMethodList}
      Methodfillter={Methodfillter}
      onClickMaterialList={onClickMaterialList}
      Materialfillter={Materialfillter}
      onClickRefresh={onClickRefresh}
      cheked={cheked}
      onChangechked={onChangechked}
    />
  );
}
