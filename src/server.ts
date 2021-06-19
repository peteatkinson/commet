import 'module-alias/register'

import env from './config/env'

import { PostgresClient } from './infrastructure/PostgresClient'

PostgresClient.connect(env.postgressConnection)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`🚀 App up-and-running at: http://localhost:${env.port}`))
  }).catch((err) => {
    console.error(err)
  })
