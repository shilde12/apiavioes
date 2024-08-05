import {
  Main,
  SecondText,
  TitleContainer,
} from "./styles/style";

export const HomeMain = () => {
  return (
      <Main>
        <TitleContainer>
          <h1>API de Aviões</h1>
        </TitleContainer>
        <h2>Seja bem-vindo(a)</h2>
        <br/>
        <SecondText>
          <ul>
            <li>Para exibir os dados, vá para API</li>
            <li>Para entrar em contato, vá em Contato</li>
          </ul>
        </SecondText>
      </Main>
  );
};