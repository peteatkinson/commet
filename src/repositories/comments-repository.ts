import { PostgresClient } from '@/infrastructure/PostgresClient'

export class CommentsRepository {
  async addComment (discussionId: string, ownerId: string, parentId: string, markdown: string, html: string) {
    const query = `
      INSERT INTO comments(discussionId, ownerId, parentId, html, markdown)
      VALUES (${discussionId}, ${ownerId}, ${parentId}, ${html}, ${markdown})
    `
    await PostgresClient.query(query)
  }
}
