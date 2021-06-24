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
    const { service, addCommentSpy } = makeSut()
    const handleSpy = jest.spyOn(addCommentSpy, 'handle')

    const result = await service.handle(null)
    console.log(result)

    expect(handleSpy).toBeCalledTimes(1)
  })
})
