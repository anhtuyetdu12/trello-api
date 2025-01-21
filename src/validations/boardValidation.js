/**
 * Updated by anhtuyedu.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyedu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async(req, res, next) => {
  const correctCodition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().message({
      'any.required': 'Title is required (anhtuyetdev)',
      'string.empty': 'Title is not allowed to be empty(anhtuyetdev)',
      'string.min': 'title min 3 chars (anhtuyetdev)',
      'string.max': 'Title max 50 chars (anhtuyetdev)',
      'string.trim': 'Title must not have leading or trailing whitespace (anhtuyetdev)'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict()

  })
  try {
    console.log('req.body:', req.body)
    await correctCodition.validateAsync(req.body, { abortEarly: false })
    // next()
    res.status(StatusCodes.CREATED).json({ message: 'POST from validation: API create new board' })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }
}

export const boardValidation = {
  createNew
}