import { QueryHandler } from '@/queries/core'
import { CommentsRepository } from '@/repositories/comments'
import { Discussion } from '@/types'

export interface ListCommentsQuery extends QueryHandler<ListCommentsQuery.Params, ListCommentsQuery.Result> {}

export class ListCommentsQueryHandler implements ListCommentsQuery {
  private readonly commentsRepository: CommentsRepository

  constructor (commentsRepository: CommentsRepository) {
    this.commentsRepository = commentsRepository
  }

  async handle (query?: ListCommentsQuery.Params): Promise<Discussion> {
    return await this.commentsRepository.getCommentsList(query)
  }
}

export namespace ListCommentsQuery {
  export type Params = string
  export type Result = Discussion
}
