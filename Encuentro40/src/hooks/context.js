import React from "react";

const loginData = {
  isLogin: true,
  user: {
    name: "User",
    notificaciones: ["n1", "n2"]
  }
};
export const Login = React.createContext(loginData);
