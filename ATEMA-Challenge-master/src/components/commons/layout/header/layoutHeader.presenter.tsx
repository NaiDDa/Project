import Navigation from "../../navigation/navigation";
import {
  Wrapper,
  HeaderWrapper,
  HeaderLeftWrapper,
  HeaderRightWrapper,
  Title,
  TitleImg,
  FactoryIcon,
  Factoryitle,
  Logout,
  MenueBox,
  Menu,
} from "./layoutHeader.styles";

interface IHeaderProps {
  onClickNavi: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export default function LayoutHeaderUI(props: IHeaderProps) {
  return (
    <>
      {props.isOpen && <Navigation setIsOpen={props.setIsOpen} />}
      <Wrapper>
        <HeaderWrapper>
          <HeaderLeftWrapper>
            <MenueBox onClick={props.onClickNavi}>
              <Menu />
              <Menu />
              <Menu />
            </MenueBox>

            <Title>
              <TitleImg src={"images/자산 1@3x 3.png"} />
            </Title>
          </HeaderLeftWrapper>

          <HeaderRightWrapper>
            <FactoryIcon src={"images/Vector(1).png"} />
            <Factoryitle>A 가공 업체</Factoryitle>
            <Logout>로그아웃</Logout>
          </HeaderRightWrapper>
        </HeaderWrapper>
      </Wrapper>
    </>
  );
}
