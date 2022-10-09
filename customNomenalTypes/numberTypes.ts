import { Brand } from "../Brand"

export type byte = Brand<number, 'byte'> 
export type short = Brand<number, 'short'> | byte
export type int = Brand<number, 'int'> | short
export type long = Brand<number, 'long'> | int
export type float = Brand<number, 'float'>
