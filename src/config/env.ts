import dotenv from 'dotenv'
dotenv.config()

export default {
  port: 8080,
  postgressConnection: 'postgresql://root:root@localhost:5432/test_db'
}
