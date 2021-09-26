import { QueryHandler } from '@/queries/core'
import { DiscussionRepository } from '@/repositories/discussion-repository'
import { Discussion } from '@/types'

export interface ListCommentsQuery extends QueryHandler<GetDiscussionByIdQuery.Params, GetDiscussionByIdQuery.Result> {}

export class ListCommentsQueryHandler implements ListCommentsQuery {
  private readonly repository: DiscussionRepository

  constructor (repository: DiscussionRepository) {
    this.repository = repository
  }

  async handle (query?: GetDiscussionByIdQuery.Params): Promise<Discussion> {
    return await this.repository.getDiscussionById(query)
  }
}

export namespace GetDiscussionByIdQuery {
  export type Params = string
  export type Result = Discussion
}
