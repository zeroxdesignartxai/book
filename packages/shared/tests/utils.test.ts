import { describe, expect, it } from "vitest";

import { bookSchema, nowIso, slugify } from "../src/index.js";

describe("shared utils", () => {
  it("slugify normalizes strings", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("nowIso returns an ISO timestamp", () => {
    const value = nowIso();
    expect(value).toMatch(/\d{4}-\d{2}-\d{2}T/);
  });

  it("bookSchema validates minimal payload", () => {
    const payload = {
      schemaVersion: "1.0",
      bookId: "bk_123",
      title: "Test",
      language: "en",
      createdAt: "2026-01-01T00:00:00Z",
      sources: [{ sourceId: "src_1", filename: "file.pdf", sha256: "hash" }],
      blocks: [
        {
          id: "b1",
          type: "paragraph",
          text: "Hello",
          provenance: { sourceId: "src_1" }
        }
      ]
    };

    expect(() => bookSchema.parse(payload)).not.toThrow();
  });
});
