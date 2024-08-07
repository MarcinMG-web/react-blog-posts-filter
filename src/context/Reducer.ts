// Reducer to Handle Actions

import { State } from './Interface';
import { Action } from './InitialStateAndActions';

export const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'SET_SELECTED_AUTHOR':
      return {
        ...state,
        selectedAuthor: action.payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
