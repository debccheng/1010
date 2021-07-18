import React, { FC } from 'react';
import { Block } from '../../../../../utils/blockMaker';
import { ColouredCellStyled } from './ColouredCellStyled';

type Props = {
  colour: Block['colour'] | null;
}

// cell that is coloured which will make up the block
const ColouredCell: FC<Props> = ({ colour } : Props) => (
  <>
    <ColouredCellStyled colour={colour || null} />
  </>
);

export default ColouredCell;
