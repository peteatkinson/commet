import { Controller } from '@/presentation/protocols'
import { GetDiscussionController } from '@/presentation/controllers'
import { GetDiscussionQueryHandler } from '@/queries/get-discussion'

export const makeGetDiscussionController = (): Controller => {
  const queryHandler = new GetDiscussionQueryHandler()
  return new GetDiscussionController(queryHandler)
}
