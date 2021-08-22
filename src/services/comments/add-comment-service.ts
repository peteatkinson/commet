import { Service } from '@/presentation/protocols'
import { AddComment } from '@/commands/comments'
// import { MarkdownConverter, HtmlConverter } from '@/utils/converters'

export class AddCommentService implements Service<AddCommentService.Request, Promise<void>> {
  constructor (private readonly addComment: AddComment) { }

  async handle (request: AddCommentService.Request): Promise<void> {
    function Command (discussionId: string, parentId: string, markdown: string, ownerId: string, html: string, plainText: string): AddComment.Params {
      return { discussionId, parentId, markdown, ownerId, html, plainText }
    }

    const {
      discussionId,
      parentId,
      markdown,
      ownerId
    } = request

    const html = ''
    const plainText = ''

    return await this.addComment.handle(Command(discussionId, parentId, markdown, ownerId, html, plainText))
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
