import styled from "styled-components";

const Form = styled.form`
    background-color: #ffffff;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
    input {
        width: 200px;
    }
    .button-submit {
        width: 200px;
        margin-right: 0px;
        background-color: #02d29e;
    }
`
export {Form};