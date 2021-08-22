import { newDb, IMemoryDb } from 'pg-mem'

class InMemoryPostgresClient {
  private static _instance?: InMemoryPostgresClient

  db?: IMemoryDb

  private constructor () {
    this.db = newDb()
  }

  static get instance () {
    return this._instance || (this._instance = new this())
  }

  insert (query: string): void {
    this.db.public.none(query)
  }

  queryMany<T> (query: string): T[] {
    return this.db.public.many(query) as T[]
  }

  queryOne<T> (query: string): T {
    return this.db.public.one(query) as T
  }

  seed () {
    this.db.public.none(`CREATE TABLE comments (
      commentId               string        NOT NULL UNIQUE PRIMARY KEY,
      discussionId            string        NOT NULL,
      parentId                string        NOT NULL,
      ownerId                 string        NOT NULL,
      markdown                TEXT          NOT NULL,  
      html                    TEXT          NOT NULL,
      plainText               TEXT          NOT NULL,
    );
    `)
  }
}

const client = InMemoryPostgresClient.instance
export { client as InMemoryPostgresClient }
