export interface IBoardCardUIPorps {
  data: {
    id: number;
    title: string;
    client: string;
    due: string;
    count: number;
    amount: number;
    method: [string];
    material: [string];
    status: string;
  };
}
export interface IBoardCardPorps {
  data: {
    id: number;
    title: string;
    client: string;
    due: string;
    count: number;
    amount: number;
    method: [string];
    material: [string];
    status: string;
  };
}
export interface IBoardCardStylePorps {
  isEdit: string;
  edit: "대기중" | "상담중";
}
