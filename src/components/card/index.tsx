import { Button, ButtonContainer, CardCont } from "./styles/style";

export interface ICard {
  titulo: string;
  descricao: string;
  url: string;
}

export const Card = (props: ICard) => {
  return (
    <>
      <CardCont>
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
        <ButtonContainer>
          <Button>
            <a href={props.url}>Ir</a>
          </Button>
        </ButtonContainer>
      </CardCont>
    </>
  );
};
