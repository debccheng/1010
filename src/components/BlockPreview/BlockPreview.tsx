import React, { FC, Fragment } from 'react';
import GameBlock from './components/GameBlock';
import { queueGameBlocks } from '../../utils/gameConfig';
import { BlockPreviewWrapperStyled } from './BlockPreviewStyled';

const BlockPreview: FC = () => {
  console.log('');
  return (
    <BlockPreviewWrapperStyled>
      {queueGameBlocks.map(({ colour, shape }, index) => (
        <Fragment key={`${index + 1}-${colour}-${shape}`}>
          <GameBlock shape={shape} colour={colour} />
        </Fragment>
      ))}
    </BlockPreviewWrapperStyled>
  );
};

export default BlockPreview;
