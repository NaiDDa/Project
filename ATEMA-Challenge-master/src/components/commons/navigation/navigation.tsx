import { Wrapper, MenuBar, Head, Body, List } from "./navigation.styles";

interface INaviProps {
  setIsOpen: (value: boolean) => void;
}
export default function Navigation(props) {
  return (
    <>
      <Wrapper onClick={() => props.setIsOpen(false)}>
        <MenuBar>
          <Head>
            <img src={"images/CAPA_partners_colorlogo 1.png"} />
          </Head>
          <Body>
            <img src={"images/Group 2834.png"}></img>
            <List>로그아웃</List>
          </Body>
        </MenuBar>
      </Wrapper>
    </>
  );
}
