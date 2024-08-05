import { CardCont } from "./styles/style";

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
        <ul>
        <li>Código: {props.codigo}</li>
        <li>Fabricante: {props.fabricante}</li>
        <li>Capacidade: {props.capacidade_passageiros}</li>
        <li>Alcance(km/h): {props.alcance_km}</li>
        <li>Velocidade(km/h): {props.velocidade_cruzeiro_kmh}</li>
        <li>Comprimento(m): {props.comprimento_m}</li>
        <li>Envergadura(m): {props.envergadura_m}</li>
        <li>Altura(m): {props.altura_m}</li>
        <li>Peso Vazio(kg): {props.peso_vazio_kg}</li>
        <li>Motor: {props.tipo_motor}</li>
        <li>Potência: {props.potencia_motor_kn}</li>
        </ul>
      </CardCont>
    </>
  );
};
