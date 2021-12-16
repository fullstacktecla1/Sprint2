import { useState, useContext } from "react";
import { Login } from "../hooks/context";

export default function Usuario() {
  let login = useContext(Login);
  const [status, setStatus] = useState(login.isLogin);
  let text = status ? "LOGIN " : "LOGOUT";

  return (
    <div className="Usuario">
      <button onClick={(e) => setStatus(!status)}>
        <img src="./img/user_icon.png" />
      </button>
      {text}
    </div>
  );
}
