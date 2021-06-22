interface CommandHandler<TCommand, Value> {
  handle: (command?: TCommand) => Promise<Value>
}

export interface AddComment extends CommandHandler<AddComment.Params, AddComment.Result> { }

export class AddCommentCommandHandler implements AddComment {
  async handle (command?: AddComment.Params): Promise<string> {
    return 'HELLO RESULT FROM ADD COMMENT COMMAND HANDLER'
  }
}

export namespace AddComment {
  export type Params = {

  }
  export type Result = string
}
