/** Convert any union to intersection type
 * A | B => A & B
 */
export type Intersect<Union> = 
    (
        // generate union (_: Union1) => void | (_: Union2) => void
        Union extends any 
        ? (_: Union) => void
        : never
    ) extends (
        // all union types must be included in intersection infer type
        (_: infer Intersection) => void 
    )
    ? Intersection
    : never;
