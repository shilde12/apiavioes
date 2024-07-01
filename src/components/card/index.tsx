import { Button, ButtonContainer, CardCont } from "./styles/style";

export interface ICard {
  "codigo": string,
        "nome": string,
        "fabricante": string,
        "capacidade_passageiros": number,
        "alcance_km": number,
        "velocidade_cruzeiro_kmh": number,
        "comprimento_m": number,
        "envergadura_m": number,
        "altura_m": number,
        "peso_vazio_kg": number,
        "tipo_motor": string,
        "potencia_motor_kn": number
}

export const Card = (props: ICard) => {
  return (
    <>
      <CardCont>
        <h1>{props.nome}</h1>
        <p>{props.codigo}</p>
        <p>{props.fabricante}</p>
        <p>{props.capacidade_passageiros}</p>
        <p>{props.alcance_km}</p>
        <p>{props.velocidade_cruzeiro_kmh}</p>
        <p>{props.comprimento_m}</p>
        <p>{props.envergadura_m}</p>
        <p>{props.altura_m}</p>
        <p>{props.peso_vazio_kg}</p>
        <p>{props.tipo_motor}</p>
        <p>{props.potencia_motor_kn}</p>
        <ButtonContainer>
          <Button>
            Ir
          </Button>
        </ButtonContainer>
      </CardCont>
    </>
  );
};
