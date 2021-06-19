import { PostgresClient } from '../infrastructure/PostgresClient'
import { Comment } from './models/comment'

const getComments = async (discussionId: string): Promise<Comment[]> => {
  if (discussionId === '') {
    throw new Error('dicussionId is null/empty and is compulsory')
  }

  const query = 'SELECT * FROM comments WHERE discussionId = $1'

  const result = await PostgresClient.query(query)

  const comments: Comment[] = []

  if (result != null && result.rows.length > 0) {
    result.rows.forEach((row) => {
      comments.push(new Comment({
        commentId: row.fields.commentId,
        discussionId: row.fields.discussionId
      }))
    })
  }

  return comments
}

export {
  getComments
}
