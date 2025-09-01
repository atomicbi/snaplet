import { SeedPostgres } from "@atomicbi/snaplet-seed/adapter-postgres";
import { defineConfig } from "@atomicbi/snaplet-seed/config";
import postgres from "postgres";

export default defineConfig({
  adapter: () => {
    const client = postgres("<DATABASE_URL>");
    return new SeedPostgres(client);
  },
});
