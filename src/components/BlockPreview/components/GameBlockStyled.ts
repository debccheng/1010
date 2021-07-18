import styled from 'styled-components';

type GridLengthType = {
  gridLength: number;
}

export const GameBlockContainerStyled = styled.div<GridLengthType>`
  align-self: center;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 2px;
  ${({ gridLength }) => (
    `grid-template-columns: repeat(${gridLength}, 1fr);}`
  )}
`;
