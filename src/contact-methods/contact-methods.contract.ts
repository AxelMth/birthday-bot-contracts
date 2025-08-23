import { initContract } from '@ts-rest/core';
import {
  getContactMethodsResponseSchema,
} from './contact-methods.schema.js';
import { errorBodySchema } from '../common/schemas/error.schema.js';

const c = initContract();

export const contractMethodsContract = c.router({
  getContactMethods: {
    method: 'GET',
    path: '/api/contact-methods',
    responses: {
      200: getContactMethodsResponseSchema,
      500: errorBodySchema,
    },
  }
});
