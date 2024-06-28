import {
  TextContainer,
  Main,
  PersonIcon,
  TitleContainer,
} from "./styles/style";

import user from "../../assets/user.svg";

export const HomeMain = () => {
  return (
    <>
      <Main>
          <TitleContainer>
            <TextContainer>
            <h2>API Display de Aviões</h2>
              </TextContainer>
            <PersonIcon src={user} alt="" />
          </TitleContainer>
      </Main>
    </>
  );
};
