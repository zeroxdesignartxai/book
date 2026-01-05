import { z } from "zod";

export const bookBlockSchema = z.object({
  id: z.string(),
  type: z.enum(["paragraph", "heading", "list"]),
  text: z.string(),
  provenance: z.object({
    sourceId: z.string(),
    pageStart: z.number().optional(),
    pageEnd: z.number().optional()
  })
});

export const bookSchema = z.object({
  schemaVersion: z.literal("1.0"),
  bookId: z.string(),
  title: z.string(),
  language: z.string(),
  createdAt: z.string(),
  sources: z.array(
    z.object({
      sourceId: z.string(),
      filename: z.string(),
      sha256: z.string()
    })
  ),
  blocks: z.array(bookBlockSchema),
  plainEnglish: z
    .object({
      enabled: z.boolean(),
      blocks: z.array(
        z.object({
          blockId: z.string(),
          plainText: z.string()
        })
      )
    })
    .optional()
});

export type BookSchema = z.infer<typeof bookSchema>;
