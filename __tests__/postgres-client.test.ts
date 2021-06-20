import { PostgresClient as sut } from '@/infrastructure/PostgresClient'

describe('Postgres Client', () => {
  beforeAll(async () => {
    await sut.connect('postgresql://root:root@localhost:5432/commet_db')
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  it('Should reconnect if Postgres connection is down', async () => {
    const query = 'SELECT * FROM comments'
    let result = await sut.query(query)
    expect(result).toBeTruthy()
    await sut.disconnect()
    result = await sut.query(query)
    expect(result).toBeTruthy()
  })
})
