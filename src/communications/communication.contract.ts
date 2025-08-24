import { initContract } from '@ts-rest/core';
import {
  getPaginatedCommunicationsQuerySchema,
  getPaginatedCommunicationsResponseSchema,
} from './communication.schema.js';
import { errorBodySchema } from '../common/schemas/error.schema.js';

const c = initContract();

export const communicationContract = c.router({
  getPaginatedCommunications: {
    method: 'GET',
    path: '/api/communications',
    query: getPaginatedCommunicationsQuerySchema,
    responses: {
      200: getPaginatedCommunicationsResponseSchema,
      500: errorBodySchema,
    },
    summary: 'Get paginated communications',
  },
});
