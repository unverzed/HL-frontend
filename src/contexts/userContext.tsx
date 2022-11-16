import { createContext, ReactNode, useState } from "react";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  token: any;
  setToken: (newState: any) => void,
  hasResp: boolean,
  setHasResp: (newState: any) => void
};

const initialValue = {
  token: "",
  setToken: () => {},
  hasResp: false,
  setHasResp: () => {}
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [token, setToken] = useState(initialValue.token);
  const [hasResp, setHasResp] = useState(initialValue.hasResp);
  

  return (
    <UserContext.Provider value={{ token, setToken, hasResp, setHasResp }}>
      {children}
    </UserContext.Provider>
  );
};
