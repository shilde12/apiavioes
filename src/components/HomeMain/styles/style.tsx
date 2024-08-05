import styled from "styled-components";

export const Main = styled.main`
  max-width: 30%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  background: #13b6eb;
  margin: 3rem auto;
  border-radius: 30px;
  padding: 2rem;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: block;
  text-align: center;

  & > * {
    padding-block: 2rem;
    color: black;
  }
`;

export const SecondText = styled.div`
font-size: 1.2rem;
margin-left: 5px;
padding-inline: 2rem;
display: block;
`;