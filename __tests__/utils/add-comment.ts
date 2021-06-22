export interface AddComment {
  add: (comment: AddComment.Params) => Promise<AddComment.Result>
}

export namespace AddComment {
  export type Params = {

  }

  export type Result = string
}
