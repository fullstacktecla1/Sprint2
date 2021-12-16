import { Notificacion } from "./Notificacion";
import Usuario from "./Usuario";
import { Login } from "../hooks/context";
import { useContext } from "react";

export default function Notificaciones() {
  let login = useContext(Login);
  if (login.isLogin) {
    return (
      <div className="notificaciones d-flex nav-item">
        <Login.Provider value={login}>
          <Usuario />
          <Notificacion />
        </Login.Provider>
      </div>
    );
  } else {
    return <div className="notificaciones d-flex"></div>;
  }
}
