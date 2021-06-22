import { Service } from '@/presentation/protocols'
import { AddComment } from '@/commands/comments'
// import { MarkdownConverter, HtmlConverter } from '@/utils/converters'

export class AddCommentService implements Service<AddCommentService.Request, Promise<string>> {
  constructor (private readonly addComment: AddComment) { }

  async handle (request: AddCommentService.Request): Promise<string> {
    return await this.addComment.handle(null)
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
