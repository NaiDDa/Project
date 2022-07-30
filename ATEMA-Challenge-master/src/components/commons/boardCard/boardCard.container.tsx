import BoardCardUI from "./boardCard.presenter";
import { IBoardCardPorps } from "./boardCard.types";

export default function BoardCard(props: IBoardCardPorps) {
  return <BoardCardUI data={props.data} />;
}
