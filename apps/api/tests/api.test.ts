import { describe, expect, it, afterAll } from "vitest";
import request from "supertest";

import { buildServer } from "../src/server.js";

const app = buildServer();

afterAll(async () => {
  await app.close();
});

describe("API", () => {
  it("creates a project", async () => {
    const response = await request(app.server)
      .post("/projects")
      .send({ title: "Demo", bookType: "nonfiction" })
      .expect(201);

    expect(response.body.title).toBe("Demo");
    expect(response.body.bookType).toBe("nonfiction");
  });

  it("generates outlines", async () => {
    const project = await request(app.server)
      .post("/projects")
      .send({ title: "Outline", bookType: "nonfiction" });

    const response = await request(app.server)
      .post(`/projects/${project.body.id}/outline:generate`)
      .send()
      .expect(200);

    expect(response.body.outlines).toHaveLength(2);
  });
});
