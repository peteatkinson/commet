import { Controller } from '@/presentation/protocols'
import { GetDiscussionController } from '@/presentation/controllers'
import { GetDiscussionQueryHandler } from '@/queries/discussions/get-discussion-by-id'
import { DiscussionRepository } from '@/repositories/discussion-repository'

export const makeGetDiscussionController = (): Controller => {
  const queryHandler = new GetDiscussionQueryHandler(new DiscussionRepository())
  return new GetDiscussionController(queryHandler)
}
