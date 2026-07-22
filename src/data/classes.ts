import part01 from "./archetypes/part-01";
import part02 from "./archetypes/part-02";
import part03 from "./archetypes/part-03";
import part04 from "./archetypes/part-04";
import part05 from "./archetypes/part-05";
import part06 from "./archetypes/part-06";
import part07 from "./archetypes/part-07";

const classes = [...part01, ...part02, ...part03, ...part04, ...part05, ...part06, ...part07];

export type { Archetype, ArchetypeCategory } from "./archetypes/base";
export default classes;
