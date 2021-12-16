import { useContext, useEffect, useState } from "react";
import { Login } from "../hooks/context";

export const Notificacion = (initialValue = false) => {
  const { user } = useContext(Login);
  const [state, setState] = useState(initialValue);
  const { notificaciones } = user;
  const [notificacionesState, setNotificaciones] = useState([]);
  const handleClick = () => {
    state ? setState(false) : setState(true);
    state ? setNotificaciones(notificaciones) : setNotificaciones([]);
  };

  // useEffect(() => {
  //   console.log("Cambio el estado");
  // }, [state]);

  return (
    <div className="d-flex">
      <button className="notificacion" onClick={handleClick}>
        {state ? <img src="/img/true.png" /> : <img src="/img/false.png" />}
        {notificacionesState.map((element) => {
          return <p>{element}</p>;
        })}
      </button>
    </div>
  );
};
