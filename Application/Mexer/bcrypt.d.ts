declare module 'bcrypt' {
  export function genSaltSync(rounds?: number): string;
  export function hashSync(data: string | Buffer, salt: string | number): string;
  export function compareSync(data: string | Buffer, encrypted: string): boolean;

  export function genSalt(rounds: number, callback: (err: Error, salt: string) => void): void;
  export function hash(data: string | Buffer, salt: string | number, callback: (err: Error, encrypted: string) => void): void;
  export function compare(data: string | Buffer, encrypted: string, callback: (err: Error, same: boolean) => void): void;
}
