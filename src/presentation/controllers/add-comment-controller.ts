import { HttpResponse, Controller } from '@/presentation/protocols'

export class AddCommentController implements Controller {
  handle: (request: AddCommentController.Request) => Promise<HttpResponse>
}

export namespace AddCommentController {
  export type Request = {
    discussionId: string
  }
}
