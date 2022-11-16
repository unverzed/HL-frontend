import styled from "styled-components";

const CompanyInfo = styled.div`
  margin-top: calc(60px + 60px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background-color: #267fd3;
    color: #ffffff;
    border: none;
    font-weight: bold;
    margin-right: 25px;
    width: 25px;
    height: 25px;
  }

  h1,
  h2 {
    color: #ffffff;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-left: 20px;
  }

  h3,
  h4 {
    color: #ffffff;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-left: 20px;
  }

  .button {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
const Company = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
  background-color: black;
  justify-content: center;

  .trash-div {
    display: flex;
    justify-content: flex-end;
    justify-content: space-between;
  }
  .trash {
    color: #ffffff;
    margin-right: 20px;
  }
`;

const Places = styled.div`
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Responsibles = styled.div`
  width: 100%;
  gap: 10px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Resp = styled.div`
  background-color: #ffffff;
  width: 80%;
  height: 70px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { CompanyInfo, Company, Places, Responsibles, Resp };
