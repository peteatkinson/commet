import { HttpResponse, Controller } from '@/presentation/protocols'
import { AddCommentService } from '@/services/comments/add-comment-service'

export class AddCommentController implements Controller {
  private readonly service: AddCommentService

  constructor (service: AddCommentService) {
    this.service = service
  }

  async handle (request: AddCommentController.Request): Promise<HttpResponse> {
    return null
  }
}

export namespace AddCommentController {
  export type Request = {
    discussionId: string
  }
}
