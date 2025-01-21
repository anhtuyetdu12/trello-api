/**
 * Updated by anhtuyetdev.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyetdev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

//twettanh12
//UXyVPeCkmPrxKXQx

import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'


let trelloDatabaseInstance = null

//khoi tao 1 doi tuong mongoClientInstance de connect toi MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi:{
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

//ket noi toi db
export const CONNECT_DB = async () => {
  // goi knoi toi MongoDB Atlats voi URI da khai bao trong than cua mongoClientInstance
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

//Dong ket noi db khi can
export const CLOSE_DB = async() => {
  await mongoClientInstance.close()
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!')
  return trelloDatabaseInstance
}

