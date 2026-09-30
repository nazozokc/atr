import { z } from "zod";

export const typeJSONSchema = z.object({
  CommandName: z.string(),
  AgentName: z.enum(["codex", "claude", "opencode"]),
  AgentPrompts: z.string(),
});

export type typeJSON = z.infer<typeof typeJSONSchema>;
