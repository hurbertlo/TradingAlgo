export function putBuy(rowKey:string) {
  return {
    type: "@@putEngine/BUY" as const,
    rowKey,
  };
}
export function putSell(rowKey:string) {
  return {
    type: "@@putEngine/SELL" as const,
    rowKey,
  };
}
export function putSellAll(rowKey:string) {
  return {
    type: "@@putEngine/SELLALL" as const,
    rowKey,
  };
}
export function putFBuy(rowKey:string) {
  return {
    type: "@@putEngine/FBUY" as const,
    rowKey,
  };
}
export function putFSell(rowKey:string) {
  return {
    type: "@@putEngine/FSELL" as const,
    rowKey,
  };
}
export function putFSellAll(rowKey:string) {
  return {
    type: "@@putEngine/FSELLALL" as const,
    rowKey,
  };
}
export type PutEngineButtonActions =
  | ReturnType<typeof putBuy>
  | ReturnType<typeof putSell>
  | ReturnType<typeof putSellAll>
  | ReturnType<typeof putFBuy>
  | ReturnType<typeof putFSell>
  | ReturnType<typeof putFSellAll>;
