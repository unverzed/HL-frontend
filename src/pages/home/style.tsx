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
    background-color: #02d29e;
    color: #ffffff;
    font-weight: bold;
    margin-right: 0px;
    margin-bottom: 20px;
  }

  .company {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  button {
    background-color: #267fd3;
    color: #ffffff;
    border: none;
    font-weight: bold;
    margin-right: 25px;
    width: 25px;
    height: 25px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 100%;
  background-color: #ffffff;
  margin-top: 30px;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  gap: 5px;

  input {
    width: 250px;
    height: 30px;
  }

  .name {
    //margin-top: 20px;
  }

  .description {
    height: 50px;
  }

  .top-form {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .cancel {
    color: #c33232;
  }
`;

const AllCompanies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  .link {
    text-decoration: none;
  }
`;

const Company = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2,
  h3,
  h4 {
    color: black;
  }

  .trash-div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
  }
`;

export { Main, Form, Company, AllCompanies };
