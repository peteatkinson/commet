import { QueryHandler } from '@/queries/core'
import { Discussion } from '@/types';

export interface FindDiscussionByIdQuery extends QueryHandler<FindDiscussionByIdQuery.Params, FindDiscussionByIdQuery.Result> {}

export class GetDiscussionQueryHandler implements FindDiscussionByIdQuery {
  async handle (query?: FindDiscussionByIdQuery.Params): Promise<Discussion> {
    return null
  }
}

export namespace FindDiscussionByIdQuery {
  export type Params = string
  export type Result = Discussion
}

