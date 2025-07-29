import { createStore } from "redux";
import { Reducer } from "./reducer";

export const proStore = createStore(Reducer);
