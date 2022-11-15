import { Form, Title, Main, StyledLink } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const URL = `http://localhost:5000`;
  const { setToken } = useContext(UserContext);

  function login(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = { email, password };
    const promise = axios.post(`${URL}/login`, data);
    promise.then((response) => {
      console.log(response);
      setToken(response.data.token);
      setEmail("");
      setPassword("");
      navigate("/home");
    });

    promise.catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }

  return (
    <Main>
      <Title>HubLocal</Title>
      <Form onSubmit={login}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        ></input>
        <button type="submit" disabled={loading}>
          {loading ? (
            <div className="loading">
              <h1>Loading...</h1>
            </div>
          ) : (
            "Entrar"
          )}
        </button>
        <StyledLink>
          Ainda não tem uma conta?
          <Link to="/sign-up">
            <span> Cadastre-se</span>
          </Link>
        </StyledLink>
      </Form>
    </Main>
  );
}
