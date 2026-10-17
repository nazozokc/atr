import { z } from "zod";

export const fileSchema = z.object({
  id: z.number(),
  description: z.string(),
  cron: z.string(),
  run: z.string(),
  enabled: z.boolean(),
});

export type FileType = z.infer<typeof fileSchema>;
