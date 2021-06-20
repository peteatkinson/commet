import { PostgresClient } from '@/infrastructure/PostgresClient'

export class CommentsRepository {
  async addComment (discussionId: string, ownerId: string, parentId: string, markdown: string, html: string, plainText: string) {
    const query = `
      INSERT INTO comments(discussionId, ownerId, parentId, html, markdown, plainText)
      VALUES ('${discussionId}', '${ownerId}', '${parentId}', '${html}', '${markdown}', '${plainText}')
    `
    await PostgresClient.query(query)
  }
}
