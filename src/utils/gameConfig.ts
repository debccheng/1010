import { makeBlock } from './blockMaker';

const queueSize = 3;

export const queueGameBlocks = [...new Array(queueSize)].map(() => makeBlock());
