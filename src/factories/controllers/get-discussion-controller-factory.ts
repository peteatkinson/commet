import { Controller } from '@/presentation/protocols'
import { ListCommentsController } from '@/presentation/controllers'
import { ListCommentsQueryHandler } from '@/queries/list-comments'
import { CommentsRepository } from '@/repositories/comments'

export const makeListCommentsController = (): Controller =>
  new ListCommentsController(
    new ListCommentsQueryHandler(new CommentsRepository())
  )
