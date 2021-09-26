import { HttpResponse, Controller } from '@/presentation/protocols'
import { ListCommentsQuery } from '@/queries'
import { Request } from '@/presentation/protocols/request'

export class ListCommentsController implements Controller {
  private readonly listCommentsQuery: ListCommentsQuery

  constructor (listCommentsQuery: ListCommentsQuery) {
    if (listCommentsQuery === null) {
      throw new Error('Missing dependency of type [ListCommentsQuery]')
    }
    this.listCommentsQuery = listCommentsQuery
  }

  async handle (request: Request.ListComments): Promise<HttpResponse> {
    const result = await this.listCommentsQuery.handle(request.discussionId)

    return {
      statusCode: 200,
      body: result
    }
  }
}
