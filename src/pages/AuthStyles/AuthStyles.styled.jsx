import styled from '@emotion/styled';
import { Field } from 'formik';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  border: 3px solid #7E7B72;
  border-radius: 5px;
  background-color: #ffffff25;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 0px 100px;
`;

export const InputTitle = styled.label`
  width: 150px;
  font-size: 24px;
  font-weight: 600;
  color: #7E7B72;
`;

export const Input = styled(Field)`
  width: 500px;
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  border: 2px solid #7E7B72;

  &:focus {
    border: 2px solid #f7b603c5;
  }
`;

export const BtnWrap = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 5px;
  border-color: #7E7B72;
  color: #7E7B72;
  background-color: #f7b603c5;

  font-size: 16px;
  font-weight: 600;
  transition: transform 0.5s 0.1s ease;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.2);
  }
`;