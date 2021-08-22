import { HttpResponse } from "@/presentation/protocols";

const makeHttpResponse = (statusCode: number, body: any) : HttpResponse => ({
  statusCode: statusCode,
  body: body
})

const makeBadRequest = (body: any): HttpResponse => makeHttpResponse(400, body)
const makeForbidden = (body: any): HttpResponse => makeHttpResponse(400, body)
const makeNotFound = (body: any): HttpResponse => makeHttpResponse(400, body)
const makeServerError =  (body: any) : HttpResponse => makeHttpResponse(500, body)
const makeOk = (body: any): HttpResponse => makeHttpResponse(200, body)

export {
  makeBadRequest,
  makeForbidden, 
  makeNotFound,
  makeServerError,
  makeOk
}