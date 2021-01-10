import { HttpResponse } from '../http';

export type RespondProviderContract = () => {
  created: (opts: any) => HttpResponse;

  ok: (opts: any) => HttpResponse;

  noContent: () => HttpResponse;

  badRequest: (opts: string) => HttpResponse;

  unauthorized: (opts: string) => HttpResponse;
};
