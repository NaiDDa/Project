import styled from "@emotion/styled";
import { IBoardCardStylePorps } from "./boardCard.types";

export const Body = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Contents = styled.div`
  height: 356px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 24px 26px 24px 16px;
  :hover {
    outline: 2px solid #2196f3;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentsHead = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 16px;
`;
export const Colum = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 100%;
  height: 24px;
`;
export const Product = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #323d45;
`;

export const Status: any = styled.div`
  text-align: center;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props: IBoardCardStylePorps) => {
    const edit = {
      대기중: " grey",
      상담중: "#ffa000",
    };
    return edit[props.isEdit];
  }};
  border: ${(props: IBoardCardStylePorps) => {
    const edit = {
      대기중: " 1px solid grey",
      상담중: "1px solid #ffa000",
    };
    return edit[props.isEdit];
  }};
  border-radius: 12px;
  width: 50px;
  height: 24px;
`;
export const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #323d45;
`;
export const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #939fa5;
  margin-top: 24px;
`;
export const ContentsBody = styled.div`
  margin-top: 32px;
`;

export const Colum2 = styled.div`
  display: flex;
  margin-bottom: 8px;
  width: 100%;
`;
export const Stuff = styled.div`
  width: 70px;
  height: 20px;
  color: #323d45;
`;
export const Amount = styled.div`
  font-size: 16px;
  font-weight: 600;
  width: 232px;
  height: 20px;
  color: #323d45;
  margin-left: 32px;
`;
export const ContentsFooter = styled.div`
  display: flex;
  margin-top: 24px;
`;
export const GoDetail = styled.button`
  width: 108px;
  height: 32px;
  margin-right: 10px;
  background-color: #2196f3;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;
export const GoChat = styled.button`
  width: 76px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #2196f3;
  background-color: #ffffff;
  color: #2196f3;
  font-size: 14px;
  font-weight: 500;
`;
