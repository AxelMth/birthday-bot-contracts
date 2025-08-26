import { initContract } from '@ts-rest/core';
import {
  authValidateResponseSchema,
  authValidateHeadersSchema,
} from './auth.schema.js';
import { errorBodySchema } from '../common/schemas/error.schema.js';

const c = initContract();

export const authContract = c.router({
  validate: {
    method: 'GET',
    path: '/api/auth/validate',
    headers: authValidateHeadersSchema,
    responses: {
      200: authValidateResponseSchema,
      403: errorBodySchema,
      500: errorBodySchema,
    },
  }
});
