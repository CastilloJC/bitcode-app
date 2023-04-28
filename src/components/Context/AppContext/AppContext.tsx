import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';
import { Response } from '../../../App';

interface AppContextProps {
  children: ReactNode;
}

type AppState = {
  favorites: Response[];
};

interface AddFavoriteAction {
  type: 'ADD_FAVORITE';
  payload: Response;
}

interface DeleteFavoriteAction {
  type: 'DELETE_FAVORITE';
  payload: Response;
}

interface AddAllFavoritesAction {
  type: 'ADD_ALL_FAVORITES';
  payload: Response[];
}

type Action = AddFavoriteAction | DeleteFavoriteAction | AddAllFavoritesAction;

type AppContextType = {
  state: AppState;
  dispatch: Dispatch<Action>;
};

const initialState: AppState = {
  favorites: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          favorite => favorite.objectID !== action.payload.objectID
        ),
      };
    case 'ADD_ALL_FAVORITES':
      return {
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
