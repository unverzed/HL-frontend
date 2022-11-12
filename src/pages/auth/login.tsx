import { Form, Title, Main, StyledLink } from "./style";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Main>
      <Title>HubLocal</Title>
      <Form>
        <input type="email" required placeholder="Email"></input>
        <input type="password" required placeholder="Senha"></input>
        <button type="submit">Entrar</button>
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
