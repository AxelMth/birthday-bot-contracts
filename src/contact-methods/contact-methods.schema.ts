import { z } from 'zod';

export const contactMethodSchema = z.object({
  id: z.number(),
  applicationName: z.string(),
  applicationMetadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null()])).nullish(),
});

export const getContactMethodsResponseSchema = z.object({
  contactMethods: z.array(contactMethodSchema),
});