import { AddCommentController } from '@/presentation/controllers'
import { AddCommentCommandHandler } from '@/commands/comments'
import { AddCommentService } from '@/services/comments/add-comment-service'
// import { AddCommentSpy } from './spies/comment-spy'
// type Stub = {
//   controller: AddCommentController
//   addCommentSpy: AddCommentSpy
// }

// const makeStub = (): Stub => {
//   const addCommentSpy = new AddCommentSpy()
//   const controller = new AddCommentController(null)
//   return {
//     controller,
//     addCommentSpy
//   }
// }

describe('AddComment Controller', () => {
  test('Vague test', async () => {
    const commandHandler = new AddCommentCommandHandler()
    const service = new AddCommentService(commandHandler)
    const controller = new AddCommentController(service)
    const httpResponse = await controller.handle(null)
    console.log(httpResponse)
    expect(2).toBe(2)
  })
})
