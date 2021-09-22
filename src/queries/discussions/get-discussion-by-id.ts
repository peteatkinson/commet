import { QueryHandler } from '@/queries/core'
import { Discussion } from '@/types';

export interface GetDiscussionByIdQuery extends QueryHandler<GetDiscussionByIdQuery.Params, GetDiscussionByIdQuery.Result> {}

export class GetDiscussionQueryHandler implements GetDiscussionByIdQuery {
  async handle (query?: GetDiscussionByIdQuery.Params): Promise<Discussion> {
    return null
  }
}

export namespace GetDiscussionByIdQuery {
  export type Params = string
  export type Result = Discussion
}

