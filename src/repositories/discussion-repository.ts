import { PostgresClient } from '@/infrastructure/PostgresClient'
import { Discussion } from '@/types'

export class DiscussionRepository {
  async getDiscussionById (discussionId: string): Promise<Discussion> {
    const query = `
      SELECT * FROM discussions d
      INNER JOIN comments c 
      ON p.discussion_id = c.discussion_id
      WHERE discussion_id=${discussionId}'
    `

    const queryResult = await PostgresClient.query<Discussion>(query)

    if (queryResult && queryResult.rowCount > 0) {
      return queryResult.rows[0]
    }

    return null
  }
}
