import { InMemoryPostgresClient } from '@/infrastructure/InMemoryPostgresClient'

export class CommentsRepository {
  addComment (discussionId: string, ownerId: string, parentId: string, markdown: string, html: string, plainText: string) {
    const query = `
      INSERT INTO comments(discussionId, ownerId, parentId, html, markdown, plainText)
      VALUES ('${discussionId}', '${ownerId}', '${parentId}', '${html}', '${markdown}', '${plainText}')
    `
    InMemoryPostgresClient.insert(query)
  }
}
