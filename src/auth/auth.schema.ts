import { z } from 'zod';


export const authValidateHeadersSchema = z.object({
  'x-api-key': z.string(),
});

export const authValidateResponseSchema = z.object({
  isAdmin: z.boolean(),
});