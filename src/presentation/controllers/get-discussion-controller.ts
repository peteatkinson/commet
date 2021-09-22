import { HttpResponse, Controller } from '@/presentation/protocols'
import { FindDiscussionByIdQuery } from '@/queries'

export class GetDiscussionController implements Controller {
  private readonly queryHandler: FindDiscussionByIdQuery

  constructor (queryHandler: FindDiscussionByIdQuery) {
    if (queryHandler === null) {
      throw new Error('Missing dependency of type GetDiscussion')
    }

    this.queryHandler = queryHandler
  }

  async handle (
    request: GetDiscussionController.Request
  ): Promise<HttpResponse> {
    // const result = await this.queryHandler.handle(null)
    return {
      statusCode: 200,
      body: `Hello from Controller: ID ${request.discussionId}`
    }
  }
}

export namespace GetDiscussionController {
  export type Request = {
    discussionId: string
  }
}
