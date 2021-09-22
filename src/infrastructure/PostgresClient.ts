import { Client, QueryResult } from 'pg'

class PostgresClient {
  private static _instance?: PostgresClient

  client?: Client
  uri?: string
  connected?: boolean

  private constructor () {}

  static get instance () {
    return this._instance || (this._instance = new this())
  }

  async connect (uri: string): Promise<void> {
    this.client = new Client(uri)
    this.uri = uri
    return new Promise((resolve, reject) => {
      this.client
        .connect()
        .then(() => {
          this.connected = true
          resolve()
        })
        .catch(() => {
          reject(new Error('Unable to connect to the Postgres Database'))
        })
    })
  }

  async disconnect (): Promise<void> {
    await this.client.end()
    this.client = null
    this.connected = false
  }

  async query<T> (query: string, args: string[] = []): Promise<QueryResult<T>> {
    if (!this.connected) {
      await this.connect(this.uri)
    }

    if (args.length > 0) {
      return this.client.query<T>(query, args)
    }

    return this.client.query<T>(query)
  }
}

const client = PostgresClient.instance
export { client as PostgresClient }
