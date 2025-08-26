import { z } from 'zod';

export const personSchema = z.object({
  id: z.number(),
  name: z.string(),
  birthDate: z.coerce.date().nullish(),
  application: z.string().nullish(),
  applicationMetadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null()])).nullish(),
});
