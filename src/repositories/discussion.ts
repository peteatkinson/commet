import { PostgresClient } from '@/infrastructure/PostgresClient'
import { Discussion } from '@/domain/models'
import { createDiscussion } from './mapper'

export class DiscussionRepository {
  async getDiscussionById (discussionId: string): Promise<Discussion> {
    const query = `
      SELECT * FROM discussions d
      INNER JOIN comments c
      ON d.discussion_id = c.discussion_id
      WHERE d.discussion_id='${discussionId}'
    `
    const result = await PostgresClient.query(query)
    return createDiscussion(result?.rows)
  }
}
