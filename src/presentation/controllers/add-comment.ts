import { HttpResponse, Controller } from '@/presentation/protocols'
import { AddComment } from '@/commands/add-comment'
import { Request } from '@/presentation/protocols/request';

export class AddCommentController implements Controller {
  private readonly commandHandler: AddComment

  constructor (commandHandler: AddComment) {
    if (commandHandler === null) {
      throw new Error('Missing dependency of type commandHandler:AddComment')
    }
    this.commandHandler = commandHandler
  }

  async handle (request: Request.AddComment): Promise<HttpResponse> {
    const result = await this.commandHandler.handle(null)
    return {
      statusCode: 200,
      body: result
    }
  }
}

