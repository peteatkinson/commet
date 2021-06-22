import faker from 'faker'
import { AddComment } from '../types'
import { v4 as uuidv4 } from 'uuid'

export class AddCommentSpy implements AddComment {
  params: AddComment.Params

  async add (params: AddComment.Params): Promise<AddComment.Result> {
    this.params = params
    return uuidv4()
  }
}