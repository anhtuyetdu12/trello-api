/**
 * Updated by anhtuyedu.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyedu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { BOARD_TYPES } from '~/utils/constants'

const createNew = async(req, res, next) => {
  const correctCodition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().message({
      'any.required': 'Title is required (anhtuyetdev)',
      'string.empty': 'Title is not allowed to be empty(anhtuyetdev)',
      'string.min': 'title min 3 chars (anhtuyetdev)',
      'string.max': 'Title max 50 chars (anhtuyetdev)',
      'string.trim': 'Title must not have leading or trailing whitespace (anhtuyetdev)'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict(),
    type: Joi.string().valid(BOARD_TYPES.PUBLIC,BOARD_TYPES.PRIVATE).required()
  })
  try {
    await correctCodition.validateAsync(req.body, { abortEarly: false })
    //validate xong cho request sang controller
    next()
  } catch (error) {
    const errorMessage = new Error(error).message
    const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage)
    next(customError)

  }
}

export const boardValidation = {
  createNew
}