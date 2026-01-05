import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("worker schema", () => {
  it("validates a job payload", () => {
    const schema = z.object({
      id: z.string(),
      type: z.string(),
      payload: z.record(z.string(), z.unknown())
    });

    expect(() => schema.parse({ id: "1", type: "export", payload: {} })).not.toThrow();
  });
});
