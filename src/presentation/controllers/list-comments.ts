import { HttpResponse, Controller } from '@/presentation/protocols'
import { GetDiscussionByIdQuery } from '@/queries'
import { Request } from '@/presentation/protocols/request';
import { Response } from '@/presentation/protocols/response';

export class ListCommentsController implements Controller {
  private readonly queryHandler: GetDiscussionByIdQuery

  constructor (queryHandler: GetDiscussionByIdQuery) {
    if (queryHandler === null) {
      throw new Error('Missing dependency of type queryHandler:GetDiscussionByIdQuery')
    }
    this.queryHandler = queryHandler
  }

  async handle (request: Request.GetDiscussionById): Promise<HttpResponse> {
    const result = await this.queryHandler.handle(request.discussionId)

    return {
      statusCode: 200,
      body: result
    }
  }
}
