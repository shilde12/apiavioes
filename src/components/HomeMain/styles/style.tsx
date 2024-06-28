import styled from "styled-components";

export const Main = styled.main`
  width: 80%;
  height: fit-content;
  margin-left: 10rem;
  margin-top: .25rem;
  padding: 1rem;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-left: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PersonIcon = styled.img`
margin-right: 10rem; 
transform: scaleX(-1); 
width: 60%; 
height: fit-content;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background: #ff0000;

  & > * {
    padding-block: 4rem;
    color: whitesmoke
  }
`;

export const IconsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  margin-right: 5rem;
  gap: 1rem;
  cursor: pointer;

  & > a {
    width: 5rem;
  }
`;
