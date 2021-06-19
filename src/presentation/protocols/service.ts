export interface Service<TRequest = any, TResponse = any> {
  handle: (request?: TRequest) => TResponse
}
