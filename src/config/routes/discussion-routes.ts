import { Router } from 'express'
import { adaptRoute } from '@/adapters/express-routes'
import { makeGetDiscussionController } from '@/factories/controllers'

export default (router: Router): void => {
  router.get(
    '/discussion/:discussionId',
    adaptRoute(makeGetDiscussionController())
  )
}
