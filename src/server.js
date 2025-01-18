/**
 * Updated by anhtuyetdu.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import { CONNECT_DB, GET_DB } from '~/config/mongodb'

const START_SERVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8017

  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())

    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`3. Hello Anh Tuyet Du, BE server running at http://${ hostname }:${ port }/`)
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


