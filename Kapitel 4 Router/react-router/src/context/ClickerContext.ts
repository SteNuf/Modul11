import { createContext } from "react";
import type { ClickerAction, ClickerState } from "../hook/clickerReducer";

export const ClickerContext = createContext<{
  count: number;
  setCount: React.Dispatch<ClickerAction>;
}>({ count: 0, setCount: () => {} });
