import { AddComment } from '@/commands/comments'
import { v4 as uuidv4 } from 'uuid'

export class AddCommentSpy implements AddComment {
  async handle (command?: AddComment.Params): Promise<AddComment.Result> {
    return uuidv4()
  }
}
