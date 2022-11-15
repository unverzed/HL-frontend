import styled from "styled-components";

const Main = styled.main`
  margin-top: calc(60px + 60px);

  .create-company {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin-left: 25px;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
  }

  .submit-company {
    width: 250px;
    height: 30px;
    border: none;
    background-color: #02D29E;
    color: #ffffff;
    font-weight: bold;
    margin-right: 0px;
  }

  .company {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  button {
    background-color: #267FD3;
    color: #ffffff;
    border: none;
    font-weight: bold;
    margin-right: 25px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  background-color: #ffffff;
  margin-top: 30px;
  border-radius: 10px;
  height: 190px;
  padding-left: 20px;
  padding-right: 20px;
  gap: 5px;

  input {
    width: 250px;
    height: 30px;
  }

  .name {
    margin-top: 20px;
  }

  .description {
    height: 50px;
  }
`;

export { Main, Form };
