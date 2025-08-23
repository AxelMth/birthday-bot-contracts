import { z } from 'zod';

export const contactMethodSchema = z.object({
  id: z.number(),
  application: z.string(),
  metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null()])).nullable(),
});

export const getContactMethodsResponseSchema = z.array(contactMethodSchema);