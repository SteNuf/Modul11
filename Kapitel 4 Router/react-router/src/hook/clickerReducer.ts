export type ClickerState = number;

export type ClickerAction = {
  type: "increment" | "decrement";
  value: number;
};

export function clickerReducer(prevState: ClickerState, action: ClickerAction) {
  switch (action.type) {
    case "increment":
      return prevState + action.value;
    case "decrement":
      return prevState - action.value;
    default:
      return prevState;
  }
}
