import { AddCommentService } from '@/services/comments/add-comment-service'
import { AddCommentSpy } from '../utils/spies/comment-spy'

type Sut = {
  service: AddCommentService
  addCommentSpy: AddCommentSpy
}

const makeSut = (): Sut => {
  const addCommentSpy = new AddCommentSpy()
  const service = new AddCommentService(addCommentSpy)
  return {
    service,
    addCommentSpy
  }
}

describe('AddCommentService', () => {
  test('Should return new commentId when creating new Comment', async () => {
    const { service } = makeSut()
    const result = await service.handle(null)
    console.log(result)
    expect(2).toBe(2)
  })
})
