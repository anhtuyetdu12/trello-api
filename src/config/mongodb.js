/**
 * Updated by anhtuyetdev.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyetdev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

//twettanh12
//UXyVPeCkmPrxKXQx

const MONGODB_URI = 'mongodb+srv://twettanh12:UXyVPeCkmPrxKXQx@cluster0-anhtuyetdev.3mord.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-AnhTuyetDev'

const DATABASE_NAME = 'trello-anhtuyetdev-mern-stack-pro'

import { MongoClient, ServerApiVersion } from 'mongodb'

let trelloDatabaseInstance = null

//khoi tao 1 doi tuong mongoClientInstance de connect toi MongoDB
const clientInstance = new MongoClient(MONGODB_URI, {
  serverApi:{
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})