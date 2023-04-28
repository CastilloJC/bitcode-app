import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';

interface AppContextProps {
  children: ReactNode;
}

type AppState = {
  // Aquí puedes definir el estado inicial de tu aplicación
  count: number;
};

type Action = { type: 'INCREMENT_COUNT' } | { type: 'DECREMENT_COUNT' } | { type: 'RESET_COUNT' };

type AppContextType = {
  state: AppState;
  dispatch: Dispatch<Action>;
};

const initialState: AppState = {
  count: 0,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT_COUNT':
      return { ...state, count: state.count - 1 };
    case 'RESET_COUNT':
      return { ...state, count: 0 };
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
