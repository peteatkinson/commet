import { Controller } from '@/presentation/protocols'
import { AddCommentController } from '@/presentation/controllers'
import { AddCommentService } from '@/services/comments/add-comment-service'
import { AddCommentCommandHandler } from '@/commands/comments'
import { CommentsRepository } from '@/repositories'

export const makeAddCommentController = (): Controller => {
  const repository = new CommentsRepository()
  const addComment = new AddCommentCommandHandler(repository)
  const addCommentService = new AddCommentService(addComment)
  return new AddCommentController(addCommentService)
}
