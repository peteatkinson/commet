import { HttpResponse, Controller } from '@/presentation/protocols'
import { ListCommentsQuery } from '@/queries'
import { Request } from '@/presentation/protocols/request'
import { ok, noContent, serverError } from '@/presentation/http/response'

export class ListCommentsController implements Controller {
  constructor (private readonly listComments: ListCommentsQuery) { }

  async handle (request: Request.ListComments): Promise<HttpResponse> {
    try {
      const discussion = await this.listComments.handle(request.discussionId)

      const comments = discussion?.comments

      return comments && comments.length > 0 ? ok(comments) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
