import { Controller } from '.././../presentation/protocols'
import { AddCommentController } from '@/presentation/controllers'

export const makeAddCommentController = (): Controller => {
  return new AddCommentController()
}
