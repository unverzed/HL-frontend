import styled from "styled-components";

const RespCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-top: calc(30px + 30px);

  .card {
    background-color: #ffffff;
    width: 200px;
    height: 100px;
    border-radius: 5px;
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

const RespPage = styled.div``;
export { RespCard, Nav, RespPage };
