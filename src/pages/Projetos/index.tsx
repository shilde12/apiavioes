import styled from "styled-components";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { Service } from "./services/services";
import { useEffect, useState } from "react";

interface IGithubas {
  codigo: string;
  nome: string;
  fabricante: string;
  capacidade_passageiros: number;
  alcance_km: number;
  velocidade_cruzeiro_kmh: number;
  comprimento_m: number;
  envergadura_m: number;
  altura_m: number;
  peso_vazio_kg: number;
  tipo_motor: string;
  potencia_motor_kn: number;
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
                codigo={item.codigo}
                nome={item.nome}
                fabricante={item.fabricante}
                capacidade_passageiros={item.capacidade_passageiros}
                alcance_km={item.alcance_km}
                velocidade_cruzeiro_kmh={item.velocidade_cruzeiro_kmh}
                comprimento_m={item.comprimento_m}
                envergadura_m={item.envergadura_m}
                altura_m={item.altura_m}
                peso_vazio_kg={item.peso_vazio_kg}
                tipo_motor={item.tipo_motor}
                potencia_motor_kn={item.potencia_motor_kn}
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
