import { HttpResponse, Controller } from '@/presentation/protocols'
import { GetDiscussion } from '@/queries/get-discussion'

export class GetDiscussionController implements Controller {
  private readonly queryHandler: GetDiscussion

  constructor (queryHandler: GetDiscussion) {
    if (queryHandler === null) {
      throw new Error('Missing dependency of type GetDiscussion')
    }

    this.queryHandler = queryHandler
  }

  async handle (
    request: GetDiscussionController.Request
  ): Promise<HttpResponse> {
    const result = await this.queryHandler.handle(null)
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
