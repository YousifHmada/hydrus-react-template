import { combineReducers } from "redux";
import students, { TodosState } from "./todos";

export type RootState = {
  todos: TodosState;
};

export default combineReducers({ students });
