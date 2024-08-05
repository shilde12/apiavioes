import { ContactForm, FormContact, Input, Label, SendBtn, TextArea } from "./styles/style";

export const Contact = () => {
  return (
    <FormContact>
      <ContactForm>
        <Label>Nome:</Label>
        <Input required></Input>
        <Label>Email:</Label>
        <Input required></Input>
        <Label>Assunto:</Label>
        <Input required></Input>
        <Label>Texto:</Label>
        <TextArea required></TextArea>
        <SendBtn>Enviar</SendBtn>
      </ContactForm>
    </FormContact>
  );
};
