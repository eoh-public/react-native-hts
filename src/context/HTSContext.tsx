import React, { useContext, useReducer } from 'react';
import { useCallback } from 'react';

import { setLocale as setI18nLocale } from '../utils/I18n';
import {
  ActionDataMap,
  ActionType,
  AuthData,
  Language,
} from '../context/actionType';
import { initialState, Action, ContextData, reducer } from '../context/reducer';

type PHContextType = {
  stateData: ContextData;
  setAuth: (authData: AuthData) => void;
  setLocale: (language: Language) => void;
  setAction: <T extends ActionType>(
    action: T,
    payload?: ActionDataMap[T]
  ) => void;
};

export const HTSContext = React.createContext<PHContextType>(
  {} as PHContextType
);
type Reducer<StateData, Action> = (
  state: StateData,
  action: Action
) => StateData;

export const HTSProvider = ({ children, initState = initialState }) => {
  const [stateData, dispatch] = useReducer<Reducer<ContextData, Action>>(
    reducer,
    initState
  );

  const setAuth = (authData: AuthData) => {
    setAction('UPDATE_AUTH', authData);
  };

  const setLocale = (language: Language) => {
    setI18nLocale(language);
    setAction('CHANGE_LANGUAGE', language);
  };

  const setAction = useCallback(
    <T extends ActionType>(action: T, payload?: ActionDataMap[T]) => {
      dispatch({ type: action, payload: payload });
    },
    []
  );

  const listAction = { setAction, setAuth, setLocale };

  const providerValue = { stateData, ...listAction };

  return (
    <HTSContext.Provider value={providerValue}>{children}</HTSContext.Provider>
  );
};

export const useHTSSelector = (
  selector: (contextData: ContextData) => unknown
) => {
  const { stateData } = useContext(HTSContext);
  return selector(stateData);
};
