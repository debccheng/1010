import React, { FC, Fragment } from 'react';
import { GridStyled, CellStyled } from './GridStyled';
import BlockPreview from '../BlockPreview/BlockPreview';

const Grid: FC = () => {
  const grid: Array<unknown[]> = Array(10).fill(0).map(() => Array(10).fill(0));
  return (
    <>
      <GridStyled>
        {grid.map((row, y) => (
          <Fragment key={`${y * 10}`}>
            {row.map((_, x) => (
              <CellStyled key={`${y * 10 + x + 1}`} />
            ))}
          </Fragment>
        ))}
      </GridStyled>
      <BlockPreview />
    </>
  );
};

export default Grid;
