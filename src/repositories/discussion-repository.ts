import { PostgresClient } from '@/infrastructure/PostgresClient'
import { Discussion } from '@/types'
import { createDiscussion } from './mapper'

export class DiscussionRepository {
  async getDiscussionById (discussionId: string): Promise<Discussion> {
    const query = `
      SELECT * FROM discussions d
      INNER JOIN comments c
      ON d.discussion_id = c.discussion_id
      WHERE d.discussion_id='${discussionId}'
    `
    const queryResult = await PostgresClient.query(query)
    console.log(queryResult)
    if (queryResult && queryResult.rowCount > 0) {
      return createDiscussion(queryResult.rows)
    }

    return null
  }
}
