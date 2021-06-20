import { Service } from '@/presentation/protocols'
import { CommentsRepository } from '@/repositories'

export class AddCommentService implements Service<AddCommentService.Request, boolean> {
  private readonly repository: CommentsRepository

  constructor (repository: CommentsRepository) {
    if (repository === null) {
      throw new Error('Missing dependency of type CommentsRepository')
    }
    this.repository = repository
  }

  handle (request: AddCommentService.Request): boolean {
    throw new Error('Method not implemented.')
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
