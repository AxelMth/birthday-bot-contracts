import { personSchema } from 'src/common/schemas/person.schema';
import { z } from 'zod';

export const sendTodayBirthdayMessagesBodySchema = z.undefined()

export const sendTodayBirthdayMessagesResponseSchema = z.object({
  message: z.string(),
});

export const getNextBirthdaysUntilQuerySchema = z.object({
  date: z.string().date(),
});

export const getNextBirthdaysUntilResponseSchema = z.object({
  people: z.array(personSchema),
});
  