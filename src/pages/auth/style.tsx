import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 42px;

  input {
    background-color: #02d29e;
    width: 268px;
    height: 54px;
    border-radius: 10px;
    border: none;
    text-align: center;
  }

  button {
    background-color: #267fd3;
    width: 268px;
    height: 54px;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-family: "Inter", Arial, Helvetica, sans-serif;
`;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLink = styled.div`
  font-family: poppins;
  color: white;
  font-size: 15px;
  gap: 4px;
  span {
    color: #02d29e;
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }
`;

export { Form, Title, Main, StyledLink };
