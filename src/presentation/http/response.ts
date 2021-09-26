import { HttpResponse } from '../protocols'

export const badRequest = (error: any): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const forbidden = (error: any): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: null
})

export const serverError = (error: any): HttpResponse => ({
  statusCode: 500,
  body: error
})

export const ok = (body: any): HttpResponse => ({
  statusCode: 200,
  body: body
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})
