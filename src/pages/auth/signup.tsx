import { Form, Title, Main, StyledLink } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const URL = `http://localhost:5000`;

  function createUser(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = { name, email, password };
    const promise = axios.post(`${URL}/signup`, data);
    promise.then((response) => {
      console.log(response);
      setName("");
      setEmail("");
      setPassword("");
    });

    promise.catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }

  return (
    <Main>
      <Title>
        HubLocal
      </Title>
      <Form onSubmit={createUser}>
        <input
          type="text"
          disabled={loading}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        ></input>
        <input
          type="email"
          disabled={loading}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <input
          type="password"
          disabled={loading}
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
            "Cadastrar"
          )}
        </button>
        <StyledLink>
          Já tem uma conta?
          <Link to="/">
            <span> Faça o login</span>
          </Link>
        </StyledLink>
      </Form>
    </Main>
  );
}
