import { Client, QueryResult } from 'pg'

class PostgresClient {
  private static _instance?: PostgresClient

  client?: Client
  config?: any
  connected?: boolean

  private constructor() { 
    console.log('hello')
  }

  static get instance() {
    return this._instance || (this._instance = new this())
  }

  async connect(config: any = {}): Promise<void> {
    console.log(config)
    this.client = new Client({
      ...config
    })
    console.log('testing connect function')
    this.config = config
   return new Promise((resolve, reject) => {
    this.client.connect().then(() => {
    this.connected = true
        resolve()
    }).catch((err)=> {
      console.log('err', err)
      reject()
    })
   })

  }

  async disconnect(): Promise<void> {
    await this.client.end()
    this.client = null
    this.connected = false
  }

  async query(query: string, args: string[] = []): Promise<QueryResult> {
    // console.log('this.connected', this.connected)
    if (!this.connected) {
      await this.connect(this.config)
    }

    // console.log('this...', this.client)
    if(args.length > 0) {
      return this.client.query(query, args)
    }

    return this.client.query(query)
  }
}


const client = PostgresClient.instance
export { client as PostgresClient }
