import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.string().min(0).max(65535),
  WEB_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  DB_PASSWORD: z.string({ required_error: 'DB PASSWORD is required' }),
  USER_NAME: z.string({ required_error: 'USER NAME is required' }),
  DB_NAME: z.string({ required_error: 'DB NAME is required' }),
});

export type EnvConfig = z.infer<typeof envSchema>;
