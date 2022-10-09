/**
 * Generate unique type for any primitive
 */
export type Brand<T, Key> = T & {readonly _brand: Key}
