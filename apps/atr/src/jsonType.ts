import { z } from "zod";

export const typeJSONSchema = z.object({
  id: z.string(),
  AgentName: z.enum(["codex", "claude", "opencode"]),
});

export type typeJSON = z.infer<typeof typeJSONSchema>;
