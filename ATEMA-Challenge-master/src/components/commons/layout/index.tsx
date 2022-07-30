import LayoutHeader from "./header/layoutHeader.container";
import styled from "@emotion/styled";
export default function Layout({ children }: { children: React.ReactNode }) {
  const Body = styled.div`
    @media only screen and (max-width: 768px) {
      width: 100%;
      padding: 24px 20px 20px 20px;
    }
  `;
  const Wrapper = styled.div`
    @media only screen and (max-width: 768px) {
      width: 100%;
      overflow-x: hidden;
    }
  `;
  return (
    <>
      <Wrapper>
        <LayoutHeader />
        <Body>{children}</Body>
      </Wrapper>
    </>
  );
}
