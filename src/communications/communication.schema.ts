import { z } from 'zod';

export const communicationSchema = z.object({
  id: z.number(),
  personName: z.string(),
  applicationName: z.string(),
  message: z.string(),
  sentAt: z.coerce.date(),
});

export const getPaginatedCommunicationsQuerySchema = z.object({
  pageSize: z.coerce.number().optional().default(10),
  pageNumber: z.coerce.number().optional().default(1),
});

export const getPaginatedCommunicationsResponseSchema = z.object({
  count: z.number(),
  communications: z.array(communicationSchema),
});