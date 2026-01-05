import { buildServer } from "./server.js";

const app = buildServer();
const port = Number.parseInt(process.env.PORT ?? "4000", 10);

app.listen({ port, host: "0.0.0.0" }).catch((error) => {
  app.log.error(error);
  process.exit(1);
});
