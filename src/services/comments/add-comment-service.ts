import { Service } from '@/presentation/protocols'

export class AddCommentService implements Service<AddCommentService.Request, boolean> {
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
