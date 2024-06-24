import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-width: 100vw;
  height: 60px;
  background: #2dedda;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2rem;
`;

export const WebsiteTitle = styled.h1`
  color: black;
  font-weight: 400;
`;

export const HeaderNavBar = styled.nav`
  width: 40%;
  height: 100%;
`;

export const NavBarUl = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 5rem;
`;

export const NavBarUlLi = styled.li`
  list-style: none;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;

  & > a:hover {
    color: blue;
  }
`;
