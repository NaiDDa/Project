import BoardCard from "../boardCard/boardCard.container";
import { Body, Contents } from "./filterdData.styles";
import { IFiltredUIPorps } from "./fillterdData.types";

export default function FilterdDataUI(props: IFiltredUIPorps) {
  // 체크 박스 필터링

  const filteredData = props.serverData.filter(
    (data) =>
      !props.array.some(
        (v) => !data.method.includes(v) && !data.material.includes(v),
      ),
  );
  // 상담중 필터링
  const finalData = props.cheked
    ? filteredData
        .filter((data) => data.status.includes("상담중"))
        .map((data) => (
          <>
            <BoardCard data={data} />
          </>
        ))
    : filteredData.map((data) => (
        <>
          <BoardCard data={data} />
        </>
      ));

  return (
    <>
      {!finalData.length ? (
        <Body>
          <Contents>조건에 맞는 견적 요청이 없습니다.</Contents>
        </Body>
      ) : (
        finalData
      )}
    </>
  );
}
