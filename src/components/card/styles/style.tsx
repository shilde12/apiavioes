import styled from "styled-components";

export const CardCont = styled.div`
  width: 100%;
  max-width: 400px; /* Define uma largura máxima para evitar estouro */
  border: solid aqua 1px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  justify-content: space-between;
  background-color: #2c2c2c; /* Fundo cinza escuro */
  color: #13b6eb;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    word-wrap: break-word; /* Quebra de linha para textos longos */
  }

  & > * {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;