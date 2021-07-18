import {
  BlockTypes,
  BlockType,
  BlockShape,
} from './types/block';
import { getRandomNumber } from './helpers';

export class Block {
  name: BlockType;

  colour: string;

  shape: BlockShape;

  score: number;

  constructor(name: BlockType) {
    this.name = name;
    this.colour = Block.colours[name];
    this.shape = Block.shapeConfig[name];
    this.score = Block.scoreConfig[name];
  }

  private static colours: Record<BlockType, string> = {
    'Square-sm': 'rgba(126, 142, 213, 1)',
    'Square-md': 'rgba(152, 220, 85, 1)',
    'Square-lg': 'rgba(77, 213, 176, 1)',
    'Line-xs': 'rgba(255, 198, 62, 1)',
    'Line-sm': 'rgba(237, 149, 74, 1)',
    'Line-md': 'rgba(231, 106, 130, 1)',
    'Line-lg': 'rgba(220, 101, 85, 1)',
    'L-sm': 'rgba(89, 203, 134, 1)',
    'L-lg': 'rgba(92, 190, 228, 1)',
  };

  private static shapeConfig: Record<BlockType, BlockShape> = {
    'Square-sm': [
      [1],
    ],
    'Square-md': [
      [1, 1],
      [1, 1],
    ],
    'Square-lg': [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    'Line-xs': [[1, 1]],
    'Line-sm': [[1, 1, 1]],
    'Line-md': [[1, 1, 1, 1]],
    'Line-lg': [[1, 1, 1, 1, 1]],
    'L-sm': [
      [1, 1],
      [1, 0],
    ],
    'L-lg': [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
  }

  private static scoreConfig: Record<BlockType, number> = {
    'Square-sm': 1,
    'Square-md': 4,
    'Square-lg': 9,
    'Line-xs': 2,
    'Line-sm': 3,
    'Line-md': 4,
    'Line-lg': 5,
    'L-sm': 3,
    'L-lg': 5,
  }

  private static getRotation = (shape: BlockShape): BlockShape => {
    const rotationIndex: number = getRandomNumber(4);
    const rowNumber = shape.length;
    const columnNumber = shape[0].length;
    let rotatedShape: BlockShape = [];
    for (let i = 0; i < rotationIndex; i += 1) {
      const temp = [];
      for (let j = 0; j < columnNumber; j += 1) {
        const row: Array<1 | 0> = [];
        for (let k = rowNumber - 1; k >= 0; k -= 1) {
          row.push(shape[k][j]);
        }
        temp.push(row);
      }
      rotatedShape = temp;
    }
    return rotatedShape;
  }
}

export const makeBlock = (): Block => {
  const blockType = BlockTypes[getRandomNumber(BlockTypes.length)];
  return new Block(blockType);
};
