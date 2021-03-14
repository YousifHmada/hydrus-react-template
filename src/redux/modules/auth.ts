import { RequestStatus, Action, Dispatch, State } from "./helpers/types";

// Action types
const REQUEST_LOADING = `REQUEST_LOADING`;
const REQUEST_SUCCEEDED = `REQUEST_SUCCEEDED`;
const REQUEST_FAILED = `REQUEST_FAILED`;
const HTTP_ERRORS_DISMISSED = `HTTP_ERRORS_DISMISSED`;
const STATE_RESET = `STATE_RESET`;

// Types & enums
export type AuthState = {
  status: RequestStatus;
  error?: Error;
};

// Initial state
const initialState: AuthState = {
  status: RequestStatus.IDLE,
};

// Slice reducer
export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case REQUEST_LOADING:
      return { ...state, status: RequestStatus.LOADING };
    case REQUEST_SUCCEEDED:
      return {
        ...state,
        status: RequestStatus.SUCCEEDED,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        status: RequestStatus.FAILED,
        errors: action.payload,
      };
    case HTTP_ERRORS_DISMISSED:
      return { ...state, status: RequestStatus.IDLE, errors: undefined };
    case STATE_RESET:
      return initialState;
    default:
      return state;
  }
}

// Helper action creators
const authRequestLoading = () => ({
  type: REQUEST_LOADING,
});

const authRequestSucceeded = () => ({
  type: REQUEST_SUCCEEDED,
});

const authRequestFailed = (error: Error) => ({
  type: REQUEST_FAILED,
  payload: error,
});

// Public action creators
export const sendMockRequest = () => async (dispatch: Dispatch) => {
  dispatch(authRequestLoading());
  try {
    setTimeout(() => {
      dispatch(authRequestSucceeded());
    }, 3000);
  } catch (error) {
    dispatch(authRequestFailed(error));
  }
};

export const dismissErrors = () => ({
  type: HTTP_ERRORS_DISMISSED,
});

export const resetState = () => ({
  type: STATE_RESET,
});

// Slice selectors
export const getAuthState = (state: State) => state.auth;
