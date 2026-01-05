import { z } from "zod";

const jobSchema = z.object({
  id: z.string(),
  type: z.enum([
    "extract",
    "outline",
    "draft",
    "plain-english",
    "export"
  ]),
  payload: z.record(z.string(), z.unknown())
});

const sampleJob = {
  id: "job_demo",
  type: "export",
  payload: { projectId: "project_demo" }
};

const parsed = jobSchema.parse(sampleJob);

console.log("Worker ready. Sample job:", parsed);
