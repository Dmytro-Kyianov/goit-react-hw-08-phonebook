import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const UserTitle = styled.p`
  margin: 0;
  font-size: 24px;
  color: #f7b603c5;
`;

export const LogOutBtn = styled.button`
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