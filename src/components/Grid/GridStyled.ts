import styled from 'styled-components';

export const GridStyled = styled.div`
  width: 320px;
  height: 320px;
  margin: 100px auto 60px;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  grid-gap: 4px;
`;

export const CellStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 2px;
  background: rgba(229, 231, 235, 1);
`;
