
import { Comment, Discussion } from '@/types'

function createComment (row: any) {
  const discussionId = row['discussion_id']
  const commentId = row['comment_id']
  const commenterId = row['commenter_id']
  const commenterName = row['commenter_name']
  const markdown = row['markdown']
  const html = row['html']
  const score = row['score']
  const createdDate = row['created_date']
  const deleted = row['deleted']
  const comment: Comment = {
    discussionId,
    commentId,
    commenterId,
    commenterName,
    markdown,
    html,
    score,
    createdDate,
    deleted
  }
  return comment
}

function createDiscussion (rows: any[]) {
  const comments = rows.map((comment) => createComment(comment))
  const discussionId = rows[0]['discussion_id']
  const discussion: Discussion = {
    discussionId,
    comments
  }
  return discussion
}

export {
  createComment,
  createDiscussion
}
