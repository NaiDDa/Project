import {
  Wrapper,
  Header,
  Body,
  Title,
  SubTitle,
  SelectBox,
  Method,
  Material,
  DorpBox,
  ResetFillrer,
  RefreshImg,
  Switching,
  LefrHeadr,
} from "./mainPage.styles";
import { IMainUIPorps } from "./mainPage.types";
import { DropDown1 } from "../../commons/dropDown-1/dropDown-1";
import { DropDown2 } from "../../commons/dropDown-2/dropDown-2";
import Switch from "react-switch";
import FilterdData from "../../commons/filterdData/filterdData.container";
export default function MainUI(props: IMainUIPorps) {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>들어온 요청</Title>
          <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
          <DorpBox>
            <LefrHeadr>
              <SelectBox>
                <Method
                  onClick={props.onClickMethod}
                  Methodfillter={props.Methodfillter}
                >
                  {props.Methodfillter.length ? (
                    <text>가공방식({props.Methodfillter.length})</text>
                  ) : (
                    <text>가공방식</text>
                  )}
                  <text>▼</text>
                </Method>
              </SelectBox>
              {props.isMethod && (
                <DropDown1
                  onClickMethodList={props.onClickMethodList}
                  Methodfillter={props.Methodfillter}
                />
              )}
              <SelectBox>
                <Material
                  onClick={props.onClickMaterial}
                  Materialfillter={props.Materialfillter}
                >
                  {props.Materialfillter.length ? (
                    <text>재료({props.Materialfillter.length})</text>
                  ) : (
                    <text>재료</text>
                  )}
                  <text>▼</text>
                </Material>
                {props.isMaterial && (
                  <DropDown2
                    onClickMaterialList={props.onClickMaterialList}
                    Materialfillter={props.Materialfillter}
                  />
                )}
              </SelectBox>

              <ResetFillrer onClick={props.onClickRefresh}>
                <RefreshImg src={"images/refresh_24px.png"} />
                필터링 리셋
              </ResetFillrer>
            </LefrHeadr>
            <Switching>
              <Switch
                onChange={props.onChangechked}
                checked={props.cheked}
                onColor="#BBDEFB"
                onHandleColor="#2196F3"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                height={14}
                width={34}
              />
              <span style={{ marginLeft: 16 }}>상담 중인 요청만 보기</span>
            </Switching>
          </DorpBox>
        </Header>
        <Body>
          <FilterdData
            cheked={props.cheked}
            Materialfillter={props.Materialfillter}
            Methodfillter={props.Methodfillter}
          />
        </Body>
      </Wrapper>
    </>
  );
}
