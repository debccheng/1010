export const BlockTypes = [
  'Square-sm',
  'Square-md',
  'Square-lg',
  'Line-xs',
  'Line-sm',
  'Line-md',
  'Line-lg',
  'L-sm',
  'L-lg',
] as const;

export type BlockType = typeof BlockTypes[number];

export type RotationType = 0 | 1 | 2 | 3;
export type BlockShape = Array<Array<0|1>>;
