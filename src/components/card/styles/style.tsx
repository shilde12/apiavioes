import styled from "styled-components";

export const CardCont = styled.div`
  width: 30%;
  border: solid red 1px;
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
  justify-content: space-between;

  & > * {
    display: flex;
    align-items: center;
    color: #13b6eb;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 10rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 15%;
  height: fit-content;
  display: flex;
`;

export const Button = styled.button`
  padding: .7rem 1rem;
  font-size: 2rem;
  background: red;
  border-radius: 20px
`;
