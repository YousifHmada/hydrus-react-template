import { api } from "./helpers/common";
import { RequestStatus, Action, Dispatch, State } from "./helpers/types";

// Action types
const TODOS_REQUEST_LOADING = `TODOS_REQUEST_LOADING`;
const TODOS_REQUEST_SUCCEEDED = `TODOS_REQUEST_SUCCEEDED`;
const TODOS_REQUEST_FAILED = `TODOS_REQUEST_FAILED`;
const TAG_ADDED = `TAG_ADDED`;
const HTTP_ERRORS_DISMISSED = `HTTP_ERRORS_DISMISSED`;
const FILTERS_SET = `FILTERS_SET`;

// Types & enums
export type Todo = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
};

export type Filter = (todo: Todo) => boolean;

export type TodosState = {
  entities: Todo[];
  status: RequestStatus;
  errors?: Error;
  filters: Filter[];
};

// Constants
const url = "/todos";

// Initial state
const initialState: TodosState = {
  entities: [],
  status: RequestStatus.IDLE,
  filters: [],
};

// Slice reducer
export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case TODOS_REQUEST_LOADING:
      return { ...state, status: RequestStatus.LOADING };
    case TODOS_REQUEST_SUCCEEDED:
      return {
        ...state,
        status: RequestStatus.SUCCEEDED,
        entities: action.payload,
      };
    case TODOS_REQUEST_FAILED:
      return {
        ...state,
        status: RequestStatus.FAILED,
        errors: action.payload,
      };
    case TAG_ADDED:
      return {
        ...state,
        entities: state.entities.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                tags: [...(todo.tags || []), action.payload.tag],
              }
            : todo
        ),
      };
    case HTTP_ERRORS_DISMISSED:
      return { ...state, status: RequestStatus.IDLE, errors: undefined };
    case FILTERS_SET:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
}

// Helper action creators
const todosRequestLoading = () => ({
  type: TODOS_REQUEST_LOADING,
});

const todosRequestFailed = (error: Error) => ({
  type: TODOS_REQUEST_FAILED,
  payload: error,
});

const todosRequestSucceeded = (entities: Todo[]) => ({
  type: TODOS_REQUEST_SUCCEEDED,
  payload: entities,
});

// Public action creators
export const loadTodos = () => async (dispatch: Dispatch) => {
  dispatch(todosRequestLoading());
  try {
    const response = await api.get(url);
    const entities: Todo[] = response.data.todos;
    dispatch(todosRequestSucceeded(entities));
  } catch (error) {
    dispatch(todosRequestFailed(error));
  }
};

export const addTag = (id: string, tag: string) => ({
  type: TAG_ADDED,
  payload: { id, tag },
});

export const dismissErrors = () => ({
  type: HTTP_ERRORS_DISMISSED,
});

export const setFilters = (filters: Filter[]) => ({
  type: FILTERS_SET,
  payload: filters,
});

// Slice selectors
export const getTodosState = (state: State) => state.todos;

export const getTodoList = (state: State) => getTodosState(state).entities;
