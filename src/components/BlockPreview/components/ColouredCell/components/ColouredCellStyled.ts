import styled from 'styled-components';

type ColouredCellType = {
  colour: string | null;
}

export const ColouredCellStyled = styled.div<ColouredCellType>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  ${({ colour }) => (
    `background: ${colour}`
  )}
`;
