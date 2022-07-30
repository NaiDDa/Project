import styled from "@emotion/styled";
import { IMainStylePorps } from "./mainPage.types";

export const Wrapper = styled.div`
  padding: 40px 15% 60px 15%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
export const Header = styled.div`
  margin-bottom: 32px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Body = styled.div`
  display: grid;
  height: 728px;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 16px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Title = styled.div`
  font-size: 20px;
  color: #323d45;
  font-weight: 600;
`;
export const SubTitle = styled.div`
  color: #323d45;
  font-size: 16px;
`;
export const SelectBox = styled.div`
  height: 32px;
  margin-top: 32px;
  display: flex;
`;

export const Method = styled.div`
  background-color: ${(props: IMainStylePorps) =>
    props.Methodfillter.length ? "#1565C0" : "#FFF"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 19px 9px 12px;
  color: ${(props: any) =>
    props.Methodfillter.length ? "#FFF" : "#323d45;"};
  font-size: 12px;
  width: 103px;
  height: 32px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  margin-right: 8px;
  :hover {
    border: 1px solid #2196f3;
    cursor: pointer;
  }
`;
export const Material = styled.div`
  background-color: ${(props: any) =>
    props.Materialfillter.length ? "#1565C0" : "#FFF"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 19px 9px 12px;
  color: ${(props: IMainStylePorps) =>
    props.Materialfillter.length ? "#FFF" : "#323d45;"};
  font-size: 12px;
  width: 91px;
  height: 32px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  :hover {
    border: 1px solid #2196f3;
    cursor: pointer;
  }
`;
export const DorpBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ResetFillrer = styled.div`
  margin-top: 32px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #2196f3;
  :hover {
    cursor: pointer;
  }
`;
export const RefreshImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;
export const LefrHeadr = styled.div`
  display: flex;
`;
export const Switching = styled.label`
  margin-right: 16px;
  margin-top: 38px;
  width: 179px;
  height: 20px;
  display: flex;
  text-align: center;
  line-height: 20px;
`;
