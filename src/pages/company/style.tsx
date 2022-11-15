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
  height: 50px;
  background-color: black;
  justify-content: center;
`;
export { CompanyInfo, Company };
