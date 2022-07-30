import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1565c0;
  @media (max-width: 768px) {
    height: 44px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 25px 0 25px 40px;
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.div``;
export const TitleImg = styled.img``;

export const SearchInput = styled.input`
  margin-left: 40px;
  width: 480px;
  height: 38px;
  padding-left: 12px;
`;

export const SearchButton = styled.button`
  width: 80px;
  height: 38px;
`;

export const FactoryIcon = styled.img``;

export const Factoryitle = styled.div`
  margin-left: 8px;
  height: 20px;
  width: 67px;
  font-size: 14px;
  margin-right: 32px;
  color: #fff;
`;
export const Logout = styled.div`
  border-left: 2px solid #fff;
  width: 124px;
  height: 20px;
  padding-left: 32px;
  color: #fff;
`;
export const MenueBox = styled.div`
  display: none;

  @media (max-width: 768px) {
    margin-right: 18px;
    display: flex;
    flex-direction: column;
    :hover {
      cursor: pointer;
    }
  }
`;
export const Menu = styled.div`
  display: none;

  @media (max-width: 768px) {
    border-bottom: 2px solid #fff;
    width: 18px;

    display: block;
    color: #fff;
    margin-bottom: 3px;
  }
`;
