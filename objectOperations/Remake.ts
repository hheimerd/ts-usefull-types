/**
 * Generate new object from Union (A & B)
 */
export type Remake<Union> = {
    [key in keyof Union]: Union[key]
}
