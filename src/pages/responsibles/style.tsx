import styled from "styled-components";

const RespCard = styled.div`
  display: flex;
  justify-content: center;

  .card {
    background-color: #ffffff;
    width: 300px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  .head-card {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-right: 20px;
  }

  .trash {
    color: black;
  }
`;

const Nav = styled.div`
  margin-top: calc(50px + 40px);

  h1 {
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
  }

  .return {
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
  }

  .return-icon {
    color: #ffffff;
    width: 50px;
    height: 35px;
  }

  .title {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const RespPage = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: calc(30px + 30px);

  .locals {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 25px;
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

const AllLocals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 10px;

  .link {
    text-decoration: none;
  }
  
`
const LocalCard = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }
  p {
    color: black;
  }
`;


export { RespCard, Nav, RespPage, AllLocals, LocalCard };
