import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProviders";

export const useLoginUser = (): LoginUserContextType => {
  return useContext(LoginUserContext);
};
