import styled from 'styled-components';

export const GridStyled = styled.div`
  width: 230px;
  height: 230px;
  margin: 100px auto 60px;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  grid-gap: 2px;
`;

export const CellStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  background: rgba(229, 231, 235, 1);
`;
