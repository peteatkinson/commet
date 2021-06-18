// import { getComkcments } from '../src/domain/comments'
// import { PostgresClient } from '../src/domain/PostgresClient'
import { Client } from 'pg'

describe('greeter function', () => {
  // Act before assertions
  // Assert if setTimeout was called properly
  it('delays the greeting by 2 seconds', async () => {
  //   // const comments = await getComments("459aab2d-6c65-4bdc-a1a2-ec79212e138e")
  //   // expect(comments).toBeNull()

    // const connectionString = "postgresql://root:root@localhost:5432/test_db"
  //   // Read more about fake timers
  //   const client = new Client({
  //     connectionString,
  //   })

  //   client.connect().then((value) => console.log(value))

  //   client.query('SELECT NOW()', (err, res) => {
  //     console.log(err, res)
  //     client.end()
  //   })
  // });

    expect(2).toBe(2)
  })
});
