import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {
    // fetch('http://localhost:5000/api/users/login')
  },
  logout: () => {}
});
