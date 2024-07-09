import dotenv from 'dotenv';
import { ZodError } from 'zod';
import { EnvConfig, envSchema } from '../validation/env.validation';

dotenv.config();

export const validateEnv = (): EnvConfig | undefined => {
  try {
    const envVars: EnvConfig = envSchema.parse(process.env);

    return {
      PORT: envVars.PORT,
      NODE_ENV: envVars.NODE_ENV,
      DB_NAME: envVars.DB_NAME,
      USER_NAME: envVars.USER_NAME,
      DB_PASSWORD: envVars.DB_PASSWORD,
      WEB_URL: envVars.WEB_URL,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let message = undefined;
      message = error.errors;
      console.error('Validation failed:', message);
    } else {
      console.error('Error parsing environment variables:', error);
    }
  }
};
