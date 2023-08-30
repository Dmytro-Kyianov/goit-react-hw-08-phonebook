import styled from '@emotion/styled';

export const ContactWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const List = styled.li`
  list-style: none;
`;

export const ContactFrame = styled.div`
  position: relative;
  width: 500px;
  height: 100px;
  border: 3px solid #7E7B72;
  border-radius: 5px;
`;

export const ContactCard = styled.div`
  margin-top: 30px;
  padding-left: 10px;
  display: flex;
  gap: 10px;
`;

export const ContactValues = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #;
`;

export const DelBtn = styled.button`
  position: absolute;
  z-index: 101;
  top: 8px;
  right: 8px;
  padding: 0;
  display: block;
  align-items: center;
  background: none;
  border: none;
  outline: none;

  color: #f7b603c5;

  transition: transform 0.5s 0.1s ease;

  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.2);
    color: #f7b603c5;
  }
`;