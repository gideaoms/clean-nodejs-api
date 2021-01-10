export type RandomProps = { length?: number };

export type RandomResult = string;

export type HashProps = { plain: string; rounds?: number };

export type HashResult = Promise<string>;

export type CompareProps = { plain: string; hashed: string };

export type CompareResult = Promise<boolean>;
