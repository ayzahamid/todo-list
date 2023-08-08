import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const TagInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const SubmitButton = styled.input`
  border-radius: 2rem;
  border: none;
  background: #16b974;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  width: 20%;
  outline: none;
  font-size: 16px;
  padding: 1rem;
`

export const TagFormInputText = styled.input`
  width: 300px;
  max-width: 400px;
  font-size: 14px;
  padding: 12px 15px;
  border: 1px solid #cecece;
  outline: none;
  font-weight: 400;
  max-width: 80%;
  border-radius: 0.5rem 0;
`

export const TagErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin: 0.5rem 0;
`

export const HomeContainer = styled.div`
  display: flex;
  minHeight: 200px;
`
