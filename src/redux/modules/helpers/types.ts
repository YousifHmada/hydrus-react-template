import store, { RootState } from "../../store";

export interface IReactParentPropTypes {
  children?: React.ReactNode;
}

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

export type Dispatch = typeof store.dispatch;

export type State = RootState;
