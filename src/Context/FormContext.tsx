import { createContext, useContext, useReducer } from "react";

type State = {
  currentValue: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

type Action = {
  type: FormAction;
  payload: any;
};

type Context = {
  state: State;
  dispatch: (action: Action) => void;
};

const initialState = {
  currentValue: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
} satisfies State;

const FormContext = createContext<Context | undefined>(undefined);

export enum FormAction {
  setCurrentValue,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormAction.setCurrentValue:
      return { ...state, currentValue: action.payload };

    case FormAction.setName:
      return { ...state, name: action.payload };

    case FormAction.setLevel:
      return { ...state, level: action.payload };

    case FormAction.setEmail:
      return { ...state, email: action.payload };
      
    case FormAction.setGithub:
      return { ...state, github: action.payload };

    default:
      return state;
  }
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const state = useContext(FormContext);
  if (state === undefined) {
    throw new Error("Erro ao executar o contexto");
  }
  return state;
};
