



export class AddCommentCommandHandler implements CommandHandler<AddComment.Params, AddComment.Result> {
  executeCommand: (command?: AddComment.Params) => Promise<string>
}

export interface CommandHandler<TCommand, Value> {
  executeCommand: (command?: TCommand) => Promise<Value>
}

export namespace AddComment {
  export type Params = {

  }
  export type Result = string
}


