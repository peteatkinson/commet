import { Service } from '@/presentation/protocols'
import { CommentsRepository } from '@/repositories'
// import { MarkdownConverter, HtmlConverter } from '@/utils/converters'

export class AddCommentService implements Service<AddCommentService.Request, Promise<boolean>> {
  private readonly repository: CommentsRepository

  constructor (repository: CommentsRepository) {
    if (repository === null) {
      throw new Error('Missing dependency of type CommentsRepository')
    }
    this.repository = repository
  }

  async handle (request: AddCommentService.Request): Promise<boolean> {
    throw new Error('Unimplemented function')
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
