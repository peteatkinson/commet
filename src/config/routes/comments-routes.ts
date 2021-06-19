
import { Router } from 'express'
import { adaptRoute } from '@/adapters/express-routes'
import { makeAddCommentController } from '@/factories/controllers'

export default (router: Router): void => {
  router.post('/comments/', adaptRoute(makeAddCommentController()))
}
