import { QueryResult } from 'pg'
import { PostgresConnection } from './PostgresConnection'

class PostgresDatabase {
  private readonly uri: string

  constructor (uri: string) {
    this.uri = uri
  }

  async connect (): Promise<void> {
    await PostgresConnection.connect(this.uri)
  }

  async disconnect (): Promise<void> {
    await PostgresConnection.disconnect()
  }

  async query (query: string, args: string[] = []): Promise<QueryResult> {
    return await PostgresConnection.query(query, args)
  }
}

export {
  PostgresDatabase
}
