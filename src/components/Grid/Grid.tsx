import React, { FC, Fragment } from 'react';
import { GridStyled, CellStyled } from './GridStyled';

const Grid: FC = () => {
  const grid: Array<unknown[]> = Array(10).fill(null).map(() => Array(10).fill(null));
  return (
    <GridStyled className="grid w-96 h-96 grid-cols-10 gap-1 items-center justify-center my-10 mx-auto">
      {grid.map((row, y) => (
        <Fragment key={`${y * 10}`}>
          {row.map((_, x) => (
            <CellStyled
              key={`${y * 10 + x + 1}`}
              className="flex items-center justify-center w-full h-full bg-gray-200 rounded-sm text-white"
            />
          ))}
        </Fragment>
      ))}
    </GridStyled>
  );
};

export default Grid;
