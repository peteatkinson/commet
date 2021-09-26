import { HttpResponse, Controller } from '@/presentation/protocols'
import { GetCommentByIdQuery } from '@/queries'
import { Request } from '@/presentation/protocols/request'

export class DeleteCommentController implements Controller {
  private readonly getCommentByIdQuery: GetCommentByIdQuery

  constructor (getCommentByIdQuery: GetCommentByIdQuery) {
    if (getCommentByIdQuery === null) {
      throw new Error('Missing dependency of type [ListCommentsQuery]')
    }
    this.getCommentByIdQuery = getCommentByIdQuery
  }

  async handle (request: Request.ListComments): Promise<HttpResponse> {
    const result = await this.getCommentByIdQuery.handle(request.discussionId)

    return {
      statusCode: 200,
      body: result
    }
  }
}
