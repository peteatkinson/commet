import 'module-alias/register'

import env from '@/config/env'
import { InMemoryPostgresClient } from '@/infrastructure/InMemoryPostgresClient'

// import { PostgresClient } from '@/infrastructure/PostgresClient'

// PostgresClient.connect(env.postgressConnection)
//   .then(async () => {
//     const app = (await import('./config/app')).default
//     app.listen(env.port, () => console.log(`🚀 App up-and-running at: http://localhost:${env.port}`))
//   }).catch((err) => {
//     console.error(err)
//   })

// Using in memory database to test things for now until I setup a Postgres database using Docker

async function seedInMemoryDatabase () {
  InMemoryPostgresClient.seed()
  return true
}

seedInMemoryDatabase().then(async () => {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => console.log(`🚀 App up-and-running at: http://localhost:${env.port}`))
}).catch((err) => {
  console.error(err)
})
