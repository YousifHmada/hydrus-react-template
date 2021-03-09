import { RootState } from "..";

export enum RequestStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export enum Variant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}

export type Action = {
  type: string;
  payload?: any;
};

export type Thunk = (dispatch: Dispatch) => {};

export type Dispatch = (action: Action | Thunk) => {};

export type State = RootState;
