/**
 * Updated by anhtuyetdu.com's author on August 17 2024
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes'

const createNew = async(req, res, next) => {
  try {
    // console.log('req.body:', req.body)
    // console.log('req.query:', req.query)
    // console.log('req.params:', req.params)
    // console.log('req.files:', req.files)
    // console.log('req.cookies:', req.cookies)
    // console.log('req.jwtDecoded:', req.jwtDecoded)

    //Dieu huong dlieu sang tang service

    // throw new Error('anhtuyetdev test eror')
    //co kqua thi tra ve phia client
    res.status(StatusCodes.CREATED).json({ message: 'POST from validation: API create new board' })

  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}