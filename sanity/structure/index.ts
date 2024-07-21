import type { StructureResolver } from "sanity/structure";
import {
  CalendarIcon,
  UsersIcon,
  PinIcon,
  DocumentIcon,
  UserIcon,
  TagIcon,
  ArchiveIcon,
} from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.listItem()
        .title("Upcoming Blogs")
        .schemaType("blog")
        .icon(CalendarIcon)
        .child(S.documentList().title("Upcoming Blogs").filter("date > now()")),
      S.listItem()
        .title("Published Blogs")
        .schemaType("blog")
        .icon(CalendarIcon)
        .child(
          S.documentList().title("Published Blogs").filter("date < now()")
        ),
      S.divider(),
      S.documentTypeListItem("blog").title("Blogs").icon(DocumentIcon),
      S.divider(),
      S.documentTypeListItem("category").title("Category").icon(TagIcon),
      S.documentTypeListItem("author").title("Authors").icon(UsersIcon),
    ]);
