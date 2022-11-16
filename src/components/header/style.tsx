import styled from "styled-components";

const Head = styled.header`
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  height: 70px;
  padding-top: 30px;
  z-index: 1;

  h1 {
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    color: #02d29e;
    margin-left: 30px;
  }

  button {
    width: 70px;
    height: 30px;
    color: #ffffff;
    font-weight: 400;
    background: #1e1e1e;
    border-radius: 10px;
    border: none;
    margin-right: 30px;
  }

  .link {
    text-decoration: none;
  }
`;

export { Head };
