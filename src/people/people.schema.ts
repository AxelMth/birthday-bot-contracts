import { z } from 'zod';
import { personSchema } from '../common/schemas/person.schema';

// Create person
export const createPersonBodySchema = personSchema.omit({
  id: true,
});

export const createPersonResponseSchema = personSchema;

// Update person by ID
export const updatePersonByIdParamsSchema = z.object({
  id: z.coerce.number(),
});

export const updatePersonByIdBodySchema = personSchema.omit({
  id: true,
});

export const updatePersonByIdResponseSchema = personSchema

// Get person by ID
export const getPersonByIdParamsSchema = z.object({
  id: z.coerce.number(),
});

export const getPersonByIdResponseSchema = personSchema;

// Get people
export const getPeopleQuerySchema = z.object({
  search: z.string().optional(),
  pageSize: z.coerce.number().optional().default(10),
  pageNumber: z.coerce.number().optional().default(1),
  sortBy: z.enum(['name', 'birthDate']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
});

export const getPeopleResponseSchema = z.object({
  count: z.number(),
  people: z.array(personSchema),
});

export const deletePersonByIdResponseSchema = z.object({
  success: z.boolean(),
});

export const deletePersonByIdParamsSchema = z.object({
  id: z.coerce.number(),
});