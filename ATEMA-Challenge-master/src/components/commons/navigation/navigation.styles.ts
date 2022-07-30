import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 1;
`;
export const MenuBar = styled.div`
  background: #fff;
  width: 70%;
  height: 100%;
`;
export const Head = styled.div`
  height: 44px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 38px;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  align-items: center;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 33px;
`;
export const List = styled.div`
  margin-top: 26.5px;
  font-size: 14px;
  font-weight: 500;
`;
