import { Intersect } from "./Intersect";
import { Remake } from "./Remake";

/**
 * Merge any objects (include primitives) in one object type
 */
export type Merge<Union> = Remake<Intersect<Union>>
