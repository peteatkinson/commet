import { Controller } from '@/presentation/protocols'
import { GetCommentByIdController } from '@/presentation/controllers/get-comment-by-id'
import { GetCommentByIdQueryHandler } from '@/queries/get-comment-by-id'
import { CommentsRepository } from '@/repositories/comments'

export const makeGetCommentByIdController = (): Controller =>
  new GetCommentByIdController(
    new GetCommentByIdQueryHandler(new CommentsRepository())
  )
