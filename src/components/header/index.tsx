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
              <Link to={"/projetos"}>API</Link>
            </NavBarUlLi>
          </NavBarUl>
        </HeaderNavBar>
      </HeaderContainer>
    </>
  );
};
