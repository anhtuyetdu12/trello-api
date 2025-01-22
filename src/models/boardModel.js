/**
 * Updated by anhtuyetdu.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

//define collection (name & schema)
const BOARD_COLLECTION_NAME = 'boards'
const BOARD_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  slug: Joi.string().required().min(3).trim().strict(),
  description: Joi.string().required().min(3).max(256).trim().strict(),

  columnOrderIds: Joi.array().items(
    Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
  ).default([]),
  createdAt: Joi.date().default(() => Date.now()),
  updatedAt: Joi.date().default(null),
  _destroy: Joi.boolean().default(false)

})



//query tong hop (aggreegate) de lay toan bo columns va cards thuoc ve boards
const getDetails = async(id) => {
  try {
    console.log(id)
    const result = await GET_DB().collection(BOARD_COLLECTION_NAME).findOne({
      _id: new ObjectId(id)
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}


export const boardModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails
}