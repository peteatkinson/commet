import { PostgresClient } from '@/infrastructure/PostgresClient'

export class CommentsRepository {
  async addComment (discussionId: string, ownerId: string, parentId: string, markdown: string, html: string, plainText: string) {
    const query = `
      INSERT INTO comments(discussionId, ownerId, parentId, html, markdown, plainText)
      VALUES ('${discussionId}', '${ownerId}', '${parentId}', '${html}', '${markdown}', '${plainText}')
    `
    await PostgresClient.query(query)
  }

  async getCommentsList (discussionId: string) {
    const statement = `
      SELECT * FROM discussions d
      INNER JOIN comments c
      ON d.discussion_id = c.discussion_id
      WHERE d.discussion_id='${discussionId}'
    `
    const result = await PostgresClient.query(statement)
    console.log(result)
    return null
  }
}
