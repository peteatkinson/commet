import { Comment } from '@/types'

interface QueryHandler<TRequest, TResponse> {
  handle: (query?: TRequest) => Promise<TResponse>
}

export interface GetDiscussion
  extends QueryHandler<GetDiscussion.Params, GetDiscussion.Result> {}

export class GetDiscussionQueryHandler implements GetDiscussion {
  async handle (query?: GetDiscussion.Params): Promise<Comment[]> {
    return []
  }
}

export namespace GetDiscussion {
  export type Params = string
  export type Result = Comment[]
}
