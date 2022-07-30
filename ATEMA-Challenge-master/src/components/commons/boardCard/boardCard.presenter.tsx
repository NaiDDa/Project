import {
  Body,
  Contents,
  ContentsHead,
  Product,
  Status,
  Company,
  Date,
  ContentsBody,
  Colum,
  Colum2,
  Stuff,
  Amount,
  ContentsFooter,
  GoDetail,
  GoChat,
} from "./boardCard.styles";
import { IBoardCardUIPorps } from "./boardCard.types";

export default function BoardCardUI(props: IBoardCardUIPorps) {
  return (
    <>
      <Body>
        <Contents key={props.data.id}>
          <ContentsHead>
            <Colum>
              <Product>{props.data.title}</Product>
              <Status isEdit={props.data.status}>{props.data.status}</Status>
            </Colum>
            <Company>{props.data.client}</Company>
            <Date>{props.data.due}까지 납기</Date>
          </ContentsHead>
          <ContentsBody>
            <Colum2>
              <Stuff>도면개수</Stuff>{" "}
              <Amount>{props.data.count || "0"}개</Amount>
            </Colum2>
            <Colum2>
              <Stuff> 총 수량 </Stuff> <Amount>{props.data.amount}개</Amount>
            </Colum2>
            <Colum2>
              <Stuff>가공방식</Stuff> <Amount>{props.data.method}</Amount>
            </Colum2>
            <Colum2>
              <Stuff>재료</Stuff>
              <Amount>{props.data.material.join(",")}</Amount>
            </Colum2>
          </ContentsBody>
          <ContentsFooter>
            <GoDetail>요청 내역 보기</GoDetail>
            <GoChat>채팅하기</GoChat>
          </ContentsFooter>
        </Contents>
      </Body>
    </>
  );
}
