import { z } from "zod";

export const envSchema = z.object({
	PORT: z.string({ required_error: "Port number is required" }),
	WEB_URL: z.string({ required_error: "Port number is required" }),
});

export type EnvConfig = z.infer<typeof envSchema>;
