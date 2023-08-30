import styled from '@emotion/styled';

export const FilterWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;

export const InputTitle = styled.label`
  font-size: 30px;
  font-weight: 500;
  color: #7E7B72;
`;

export const Input = styled.input`
  width: 200px;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 20px;
  outline: none;

  &:focus {
    border: 2px solid #f7b603c5;
  }
`;