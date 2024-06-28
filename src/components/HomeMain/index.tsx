import {
  TextContainer,
  IconsContainer,
  Main,
  PersonIcon,
  TitleContainer,
} from "./styles/style";

import user from "../../assets/user.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

export const HomeMain = () => {
  return (
    <>
      <Main>
          <TitleContainer>
            <TextContainer>
            <h1>Hugo Lopes</h1>
            <h2>Estudante Dev. Web</h2>
            <IconsContainer>
              <a href="https://www.linkedin.com/in/hugols/" target="_blank"><img src={linkedin} alt="" /></a>
              <a href="https://github.com/shilde12" target="_blank"><img src={github}  alt="" /></a>
              </IconsContainer>
              </TextContainer>
            <PersonIcon src={user} alt="" />
          </TitleContainer>
      </Main>
    </>
  );
};
