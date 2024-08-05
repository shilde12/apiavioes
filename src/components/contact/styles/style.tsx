import styled from "styled-components";

export const FormContact = styled.main`
  max-width: 30%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  background: #13b6eb;
  margin: 3rem auto;
  border-radius: 30px;
  padding: 1.5rem;
`;

export const ContactForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  border-radius: 5px;
  width: 90%;
  font-size: 15px;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  border-radius: 5px;
  width: 91%;
  height: 3rem;
  font-size: 15px;
  margin-bottom: 0.5rem;
`;

export const TextArea = styled.textarea`
  font-size: 15px;
  border: 0.15rem solid black;
  width: 100%;
  max-width: 30rem;
  height: 10rem;
  border-radius: 5px;
  overflow: auto; 
  white-space: pre-wrap;
  display: block;
  box-sizing: border-box;
  padding: 0.5rem;
  resize: horizontal;
  margin-bottom: 1rem; 
`;

export const SendBtn = styled.button`
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #13b6eb;
  background-color: #1c1c1c;
  height: 4rem;
  width: 8rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  margin-top: 1rem;
`;