import { HttpResponse, Controller } from '@/presentation/protocols'
import { AddCommentService } from '@/services/comments/add-comment-service'

export class AddCommentController implements Controller {
  private readonly service: AddCommentService

  constructor (service: AddCommentService) {
    if (service === null) {
      throw new Error('Missing dependency of type AddCommentService')
    }

    this.service = service
  }

  async handle (request: AddCommentController.Request): Promise<HttpResponse> {
    const result = await this.service.handle(null)
    return {
      statusCode: 200,
      body: result
    }
  }
}

export namespace AddCommentController {
  export type Request = {
    discussionId: string
    parentId: string
    markdown: string
    ownerId: string
  }
}
