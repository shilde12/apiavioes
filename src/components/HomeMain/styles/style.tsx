import styled from "styled-components";

export const Main = styled.main`
  margin-left: 10rem;
  margin-top: 0.25rem;
  padding: 1rem;
`;

export const TextContainer = styled.div`
  margin-left: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TitleContainer = styled.div`
  width: 100em;
  display: flex;
  flex-direction: collumn;
  justify-content: space-between;
  align-items: center;

  background: #13b6eb;

  & > * {
    padding-block: 4rem;
    color: whitesmoke;
  }
`;