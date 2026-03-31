export function callBuy(rowKey:string) {
  return {
    type: `@@callEngine/BUY${rowKey}` as const,
    rowKey,
  };
}
export function callSell(rowKey:string) {
  return {
    type: "@@callEngine/SELL" as const,
    rowKey,
  };
}
export function callSellAll(rowKey:string) {
  return {
    type: "@@callEngine/SELLALL" as const,
    rowKey,
  };
}
export function callFBuy(rowKey:string) {
  return {
    type: "@@callEngine/FBUY" as const,
    rowKey,
  };
}
export function callFSell(rowKey:string) {
  return {
    type: "@@callEngine/FSELL" as const,
    rowKey,
  };
}
export function callFSellAll(rowKey:string) {
  return {
    type: "@@callEngine/FSELLALL" as const,
    rowKey,
  };
}
export type CallEngineButtonActions =
  | ReturnType<typeof callBuy>
  | ReturnType<typeof callSell>
  | ReturnType<typeof callSellAll>
  | ReturnType<typeof callFBuy>
  | ReturnType<typeof callFSell>
  | ReturnType<typeof callFSellAll>;
