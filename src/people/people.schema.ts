import { z } from 'zod';

// Common schemas
export const communicationSchema = z.object({
  id: z.number(),
  personId: z.number(),
  application: z.string(),
  metadata: z.record(z.string(), z.string()).nullable(),
});

// Create person
export const createPersonBodySchema = z.object({
  name: z.string(),
  birthdate: z.coerce.date(),
});

export const createPersonResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  birthdate: z.coerce.date(),
});

// Update person by ID
export const updatePersonByIdParamsSchema = z.object({
  id: z.coerce.number(),
});

export const updatePersonByIdBodySchema = z.object({
  name: z.string(),
  birthdate: z.coerce.date(),
  application: z.string(),
  metadata: z.record(z.string(), z.string()).nullable(),
});

export const updatePersonByIdResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  birthdate: z.coerce.date(),
  communications: z.array(communicationSchema),
});

// Get person by ID
export const getPersonByIdParamsSchema = z.object({
  id: z.coerce.number(),
});

export const getPersonByIdResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  birthdate: z.coerce.date(),
  communications: z.array(communicationSchema),
});

// Get people
export const getPeopleQuerySchema = z.object({
  search: z.string().optional(),
  pageSize: z.coerce.number().optional().default(10),
  pageNumber: z.coerce.number().optional().default(1),
});

export const getPeopleResponseSchema = z.object({
  count: z.number(),
  people: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      birthdate: z.coerce.date(),
      communications: z.array(communicationSchema),
    })
  ),
});
