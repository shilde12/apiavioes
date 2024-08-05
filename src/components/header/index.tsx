import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderNavBar,
  NavBarUl,
  NavBarUlLi,
  WebsiteTitle,
} from "./styles/style";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <WebsiteTitle>API Aviões</WebsiteTitle>
        <HeaderNavBar>
          <NavBarUl>
            <NavBarUlLi>
              <Link to={"/"}>Home</Link>
            </NavBarUlLi>

            <NavBarUlLi>
              <Link to={"/projects"}>API</Link>
            </NavBarUlLi>

            <NavBarUlLi>
              <Link to={"/contact"}>Contato</Link>
            </NavBarUlLi>
          </NavBarUl>
        </HeaderNavBar>
      </HeaderContainer>
    </>
  );
};
