import { PostgresDatabase } from '@/infrastructure/PostgresDatabase'

export class CommentsRepository {
  private readonly database: PostgresDatabase

  constructor (database: PostgresDatabase) {
    this.database = database
  }

  async addComment (discussionId: string, ownerId: string, parentId: string, markdown: string, html: string, plainText: string) {
    const query = `
      INSERT INTO comments(discussionId, ownerId, parentId, html, markdown, plainText)
      VALUES ('${discussionId}', '${ownerId}', '${parentId}', '${html}', '${markdown}', '${plainText}')
    `
    await this.database.query(query)
  }
}
