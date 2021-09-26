import { QueryHandler } from '@/queries/core'
import { CommentsRepository } from '@/repositories/comments'
import { Comment } from '@/types'

export interface GetCommentByIdQuery extends QueryHandler<GetCommentByIdQuery.Params, GetCommentByIdQuery.Result> {}

export class GetCommentByIdQueryHandler implements GetCommentByIdQuery {
  private readonly commentsRepository: CommentsRepository

  constructor (commentsRepository: CommentsRepository) {
    this.commentsRepository = commentsRepository
  }

  async handle (query?: GetCommentByIdQuery.Params): Promise<Comment> {
    return await this.commentsRepository.getCommentsList(query)
  }
}

export namespace GetCommentByIdQuery {
  export type Params = string
  export type Result = Comment
}
