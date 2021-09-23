import { HttpResponse, Controller } from '@/presentation/protocols'
import { GetDiscussionByIdQuery } from '@/queries'

export class GetDiscussionController implements Controller {
  private readonly queryHandler: GetDiscussionByIdQuery

  constructor (queryHandler: GetDiscussionByIdQuery) {
    if (queryHandler === null)
      throw new Error('Missing dependency of type queryHandler:GetDiscussionByIdQuery')
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
