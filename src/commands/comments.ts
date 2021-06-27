import { CommentsRepository } from "@/repositories"

interface CommandHandler<TCommand, Value> {
  handle: (command?: TCommand) => Promise<Value>
}

export interface AddComment extends CommandHandler<AddComment.Params, AddComment.Result> { }

export class AddCommentCommandHandler implements AddComment {
  constructor(private readonly repository: CommentsRepository) { }

  async handle (command?: AddComment.Params): Promise<string> {
    return 'HELLO RESULT FROM ADD COMMENT COMMAND HANDLER'
  }
}

export namespace AddComment {
  export type Params = {

  }
  export type Result = string
}
