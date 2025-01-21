/**
 * Updated by anhtuyetdu.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'

const START_SERVER = () => {
  const app = express()

  //enable req.json data
  app.use(express.json())
  
  //use API v1
  app.use('/v1', APIs_V1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`3. Hello ${env.AUTHOR}, BE server running at host: ${ env.APP_HOST } and port:${ env.APP_PORT }/`)
  })
  exitHook(() => {
    console.log('4. Server is shutting down...')
    CLOSE_DB()
    console.log('5. Disconnected from mongodb cloud atlas')
  })
}

//Cach2: Chi khi connect DB thanh cong thi moi Start Server Back-end len
(async () => {
  try {
    console.log('1. Connecting to MongoDB Clound Atlats...')
    await CONNECT_DB()
    console.log('2.Connect to MongoDb Cloud Atlas!')

    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

//Cach1:
// console.log('1. Connecting to MongoDB Cloud Atlat...')
// CONNECT_DB()
//   .then(() => console.log('2.Connect to MongoDb Cloud Atlas!'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })


