import { DiscussionEntity } from '@/domain/entities';
import { PostgresClient } from '@/infrastructure/PostgresClient'
import { Discussion } from '@/types';


function mapRows(rows: any[]) : any {
  let result = {};
  const row = rows[0];
  if(row) {
    if(row['discussion_id']) {
      row['discussionId'] = row['discussion_id'];
    }

    if(row['comments']) {
      result['comments'] = row['comments'];
    }
  }
  return result;
}

export class DiscussionRepository {
  async getDiscussionById (discussionId: string): Promise<Discussion> {
    const query = `
      SELECT * FROM discussions d
      INNER JOIN comments c 
      ON p.discussion_id = c.discussion_id
      WHERE discussion_id=${discussionId}'
    `
    const queryResult = await PostgresClient.query<Discussion>(query)

    let discussion = null;

    if(queryResult && queryResult.rowCount > 0) {
      discussion = mapRows(queryResult.rows);
    }

    return null
  }
}
