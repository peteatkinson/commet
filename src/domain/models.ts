export type Discussion = {
  discussionId: string
  comments: Comment[]
}

export type Comment = {
  discussionId: string
  commentId: string
  commenterId: string
  commenterName: string
  markdown: string
  html: string
  score: number
  createdDate: string
  deleted: boolean
}
