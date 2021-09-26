import { HttpResponse, Controller } from '@/presentation/protocols'
import { GetDiscussionByIdQuery } from '@/queries'

export class GetDiscussionController implements Controller {
  private readonly queryHandler: GetDiscussionByIdQuery

  constructor (queryHandler: GetDiscussionByIdQuery) {
    if (queryHandler === null) {
      throw new Error('Missing dependency of type queryHandler:GetDiscussionByIdQuery')
    }
    this.queryHandler = queryHandler
  }

  async handle (
    request: GetDiscussionController.Request
  ): Promise<HttpResponse> {
    const result = await this.queryHandler.handle(request.discussionId)

    return {
      statusCode: 200,
      body: result
    }
  }
}

export namespace GetDiscussionController {
  export type Request = {
    discussionId: string
  }
}
