import { Service } from '@/presentation/protocols'

export class AddCommentService implements Service<any, boolean> {
  handle (): boolean {
    throw new Error('Method not implemented.')
  }
}
