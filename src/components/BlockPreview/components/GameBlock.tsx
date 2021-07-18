import React, { FC, Fragment } from 'react';
import { Block } from '../../../utils/blockMaker';
import ColouredCell from './ColouredCell/components/ColouredCell';
import { GameBlockContainerStyled } from './GameBlockStyled';

const GameBlock: FC<Partial<Block>> = ({ shape, colour }: Partial<Block>) => {
  if (!shape || !colour) return null;
  console.log(shape);
  const columnLength = shape.length;
  const rowLength = shape[0].length ?? 0;
  const gridLength = columnLength > rowLength ? columnLength : rowLength;
  return (
    <GameBlockContainerStyled gridLength={gridLength}>
      {shape.map((row, y) => (
        <Fragment key={`${y + 1}`}>
          {row
            && row.map((cell, x) => (
              <ColouredCell key={`${x + 1}`} colour={cell === 1 ? colour : null} />
            ))}
        </Fragment>
      ))}
    </GameBlockContainerStyled>
  );
};

export default GameBlock;
