import styled from "styled-components";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { Service } from "./services/services";
import { useEffect, useState } from "react";

interface IGithubas {
  name: string;
  description: string;
  clone_url: string;
}

export const Projetos = () => {
  const projServices = Service();

  const [projetos, setProjetos] = useState([]);

  const setArray = async () => {
    const newArray = await projServices.fetchApi();

    console.log("nova array", newArray);

    setProjetos(newArray);

    console.log("PROJe", projetos);
  };

  useEffect(() => {
    setArray();
    console.log(projetos);
  }, []);
  return (
    <>
      <Header></Header>
      <Main>
        {projetos.map((item: IGithubas) => {
          return (
            <>
              <Card
                titulo={item.name.toUpperCase()}
                descricao={
                  item.description ? item.description : ""
                }
                url={item.clone_url}
              ></Card>
            </>
          );
        })}
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;
