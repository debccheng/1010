import React, { FC, Fragment } from 'react';
import { Block } from '../../../../utils/blockMaker';
import ColouredCell from './components/ColouredCell/ColouredCell';
import { GameBlockContainerStyled } from './GameBlockStyled';

const GameBlock: FC<Partial<Block>> = ({ shape, colour }: Partial<Block>) => {
  if (!shape || !colour) return null;
  return (
    <GameBlockContainerStyled gridLength={shape.length}>
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
