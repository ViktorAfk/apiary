import { z } from 'zod';

export const schema = z
  .object({
    email: z.string().email().min(5),
    name: z.string().min(1),
    password: z.string().min(8),
  })
  .required();

export type FormData = z.infer<typeof schema>;
