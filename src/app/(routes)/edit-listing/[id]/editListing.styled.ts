import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 10px 0 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin: 5px 0 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
`

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin: 5px 0 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const RadioLabel = styled.label`
  margin-right: 15px;
`;

export const Button = styled.button`
  background-color: #6200ee;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #3700b3;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;