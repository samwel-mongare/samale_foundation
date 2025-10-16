import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Samale Foundation Content")
    .items([
      // Categories first
      S.documentTypeListItem("program").title("Programs"),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["program", "story", "teamMember"].includes(listItem.getId()!)
      ),

      // Custom order for main types
      S.documentTypeListItem("story").title("Stories"),
      S.documentTypeListItem("teamMember").title("Team Members"),
    ]);
