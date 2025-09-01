import * as z from "zod";
import { type DatabaseClient } from "#core/databaseClient.js";

export const adapterConfigSchema = z.function({
  input: [],
  output: z.union([z.promise(z.unknown()), z.unknown()]),
}) as z.ZodType<() => DatabaseClient | Promise<DatabaseClient>>;
