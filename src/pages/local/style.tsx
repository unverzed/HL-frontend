import styled from "styled-components";

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

const AllLocals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .card {
    width: 300px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .head-card {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .trash {
    margin-right: 10px;
  }

  .edit {
    margin-right: 20px;
  }
`


export { Nav, AllLocals };