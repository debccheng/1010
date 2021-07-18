import styled from 'styled-components';

type GridLengthType = {
  gridLength: number;
}

export const GameBlockContainerStyled = styled.div<GridLengthType>`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 4px;
  ${({ gridLength }) => (
    `grid-template-columns: repeat(${gridLength}, 1fr);}`
  )}
`;
