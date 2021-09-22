import { HttpResponse, Controller } from '@/presentation/protocols'
import { AddComment } from '@/commands/add-comment'

export class AddCommentController implements Controller {
  private readonly commandHandler: AddComment

  constructor (commandHandler: AddComment) {
    if (commandHandler === null) {
      throw new Error('Missing dependency of type AddCommentService')
    }

    this.commandHandler = commandHandler
  }

  async handle (request: AddCommentController.Request): Promise<HttpResponse> {
    const result = await this.commandHandler.handle(null)
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
