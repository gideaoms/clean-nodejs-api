export type HttpRequest = {
  headers?: any;
  params?: any;
  body?: any;
  query?: any;
  originalRequest?: any;
};

export type HttpResponse = {
  status: number;
  body: any;
};
