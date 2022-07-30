import { ChangeEventHandler } from "react";

export interface IMainUIPorps {
  isMethod: boolean;
  isMaterial: boolean;
  onClickMethod: () => void;
  onClickMaterial: () => void;
  onClickMaterialList: ChangeEventHandler<HTMLInputElement>;
  onClickMethodList: ChangeEventHandler<HTMLInputElement>;
  Methodfillter: Array<string>;
  Materialfillter: Array<string>;
  cheked: boolean;
  onChangechked: () => void;
  onClickRefresh: () => void;
}
export interface IMainStylePorps {
  Methodfillter: Array<string>;
  Materialfillter: Array<string>;
}
