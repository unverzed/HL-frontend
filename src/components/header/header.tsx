import { Head } from "./style";
import { UserContext } from "../../contexts/userContext";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  }

  return (
    <Head>
      <Link className="link" to={`/home`}>
      <h1>HubLocal</h1>
      </Link>
      <button onClick={logOut}>Sair</button>
    </Head>
  );
}
