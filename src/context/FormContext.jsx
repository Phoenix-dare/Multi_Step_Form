import { createContext, useReducer } from "react";

export const FormContext = createContext();

export const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_PERSONAL_INFO":
      return { ...state, ...action.payload };
    case "SET_PLAN":
      return {
        ...state,
        plan: {
          type: action.payload.type,
          billing: action.payload.billing,
          amount: action.payload.amount,
        },
      };
    case "SET_ADD_ONS":
      return {
        ...state,
        addOns: { ...state.addOns, ...action.payload },
      };

    default:
      return state;
  }
};
export function FormDataProvider({ children }) {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    plan: {
      type: "",
      billing: "",
      amount: "",
    },
    addOns: {
      onlineServiceChecked: false,
      largerStorageChecked: false,
      customizableProfileChecked: false,
    },
  };

  const [formState, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
