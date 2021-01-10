import { RespondProviderContract } from '../contracts/providers/respond';

export const RespondProviderAdapter: RespondProviderContract = () => {
  return {
    ok: (data) => ({
      status: 200,
      body: data,
    }),

    created: (data) => ({
      status: 201,
      body: data,
    }),

    noContent: () => ({
      status: 204,
      body: null,
    }),

    badRequest: (message) => ({
      status: 400,
      body: { message },
    }),

    unauthorized: (message) => ({
      status: 401,
      body: { message },
    }),
  };
};
