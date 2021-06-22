import { Service } from '@/presentation/protocols'
import { CommandHandler, AddComment } from '@/commands/comments'
// import { MarkdownConverter, HtmlConverter } from '@/utils/converters'

export class AddCommentService implements Service<AddCommentService.Request, Promise<string>> {
  constructor (readonly addComment: CommandHandler<AddComment.Params, AddComment.Result>) {
  }

  async handle (request: AddCommentService.Request): Promise<string> {
    await this.addComment.executeCommand(null)
    
    return ""
  }
}

export namespace AddCommentService {
  export type Request = {
    discussionId: string
    parentId: string
    markdown: string
    ownerId: string
  }
}
