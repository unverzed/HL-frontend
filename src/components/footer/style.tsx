import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #1e1e1e;
  width: 100%;
  height: 65px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #ffffff;
    text-decoration: none;
  }

  .link {
    text-decoration: none;
  }
`;

export { Footer };
