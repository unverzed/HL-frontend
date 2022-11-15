import styled from "styled-components";

const CompanyInfo = styled.div`
  margin-top: calc(60px + 60px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h2 {
    color: #ffffff;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-left: 20px;
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
export { CompanyInfo, Company };
