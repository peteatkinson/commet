
import { Router } from 'express'
import { adaptRoute } from '@/adapters/express-routes'
import { makeAddCommentController, makeListCommentsController, makeGetCommentByIdController } from '@/factories/controllers'

export default (router: Router): void => {
  router.post('/comments/', adaptRoute(makeAddCommentController()))
  router.get('/comments/:discussionId', adaptRoute(makeListCommentsController()))
  router.get('/comment/:commentId', adaptRoute(makeGetCommentByIdController()))
}
