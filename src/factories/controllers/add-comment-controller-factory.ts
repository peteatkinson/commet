import { Controller } from '@/presentation/protocols'
import { AddCommentController } from '@/presentation/controllers'
import { AddCommentService } from '@/services/comments/add-comment-service'
import { AddCommentCommandHandler } from '@/commands/comments'
import { CommentsRepository } from '@/repositories'

export const makeAddCommentController = (): Controller => {
  const commentsRepository = new CommentsRepository();
  const addCommentCommandHandler = new AddCommentCommandHandler(commentsRepository);
  const addCommentServce = new AddCommentService(addCommentCommandHandler);

  return new AddCommentController(addCommentServce)
}
