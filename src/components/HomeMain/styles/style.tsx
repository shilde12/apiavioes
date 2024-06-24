import styled from "styled-components";

export const Main = styled.main`
  width: 30%;
  height: fit-content;
  margin-left: 10rem;
  margin-top: .25rem;
  padding: 1rem;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background: #2dedda;

  & > * {
    padding-block: 4rem;
    color: black
  }
`;