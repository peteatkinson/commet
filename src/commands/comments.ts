import { CommentsRepository } from '@/repositories'

interface CommandHandler<TCommand, Value> {
  handle: (command?: TCommand) => Promise<Value>
}

export interface AddComment extends CommandHandler<AddComment.Params, void> { }

export class AddCommentCommandHandler implements AddComment {
  private readonly repository: CommentsRepository

  constructor (repository: CommentsRepository) {
    this.repository = repository
  }

  async handle (command?: AddComment.Params): Promise<void> {
    const {
      discussionId,
      ownerId,
      parentId,
      markdown,
      html,
      plainText
    } = command

    return this.repository.addComment(discussionId, ownerId, parentId, markdown, html, plainText)
  }
}

export namespace AddComment {
  export type Params = {
    discussionId: string
    ownerId: string
    parentId: string
    markdown: string
    html: string
    plainText: string
  }
}
