import type { DefaultDocumentNodeResolver } from "sanity/structure";
import DocumentsPane from "sanity-plugin-documents-pane";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `author`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(DocumentsPane)
          .options({
            query: `*[_type == "blog" && references($id)]`,
            params: { id: `_id` },
            options: { perspective: "previewDrafts" },
          })
          .title("Blogs"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
