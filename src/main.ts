/**
 * Some predefined delay values (in milliseconds).
 */

// import { Client } from 'pg'

import { PostgresClient } from './domain/PostgresClient'


const connect = async() => {
  PostgresClient.connect({
    user: 'root',
    host: 'localhost',
    database: 'test_db',
    password: 'root',
    port: 5432
  }).then(async () => {
    const result = await PostgresClient.query('SELECT * FROM test where txt = $1', ['no'])
    console.log(result.rows)
  })
  .catch(() => {
    console.log('could not connect')
  })
}

connect()

// client.query('SELECT * FROM test', (err, res) => {
//   console.log('error, result: ', err, res)
//   client.end()
// })


console.log('hello')