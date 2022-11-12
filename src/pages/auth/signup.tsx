import { Form, Title, Main, StyledLink } from "./style";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <Main>
      <Title>HubLocal</Title>
      <Form>
        <input type="text" required placeholder="Nome"></input>
        <input type="email" required placeholder="Email"></input>
        <input type="password" required placeholder="Senha"></input>
        <button type="submit">Cadastrar</button>
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
