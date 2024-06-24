import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import { DontExist } from "./pages/DontExist";

interface IGlobal {
  color: string;
}

const GlobalStyle = createGlobalStyle`
  body {
    bacground: ${(props: IGlobal) => props.color}
  }
`;

export const App = () => {
  const location = useLocation();
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (location.pathname == "/") {
      setColor("red");
    } else if (location.pathname == "/projetos") {
      setColor("black");
    }
  }, [location]);
  return (
    <>
      <GlobalStyle color={color}></GlobalStyle>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<DontExist />}></Route>
      </Routes>
    </>
  );
};
