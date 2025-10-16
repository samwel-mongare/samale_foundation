import { type SchemaTypeDefinition } from "sanity";
import { programType } from "./programType";
import { storyType } from "./storyType";
import { teamMemberType } from "./teamMemberType";
import { partnerType } from "./partnerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [programType, storyType, teamMemberType, partnerType],
};
