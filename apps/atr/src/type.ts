import { z } from "zod";

export const fileSchema = z.object({
  id: z.number(),
  description: z.string(),
  run: z.string(),
});

export type FileType = z.infer<typeof fileSchema>;
