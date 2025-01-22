/**
 * Updated by anhtuyetdu.com's author on August 17 2024
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'


const createNew = async(req, res, next) => {
  try {
    // console.log('req.body:', req.body)
    // console.log('req.query:', req.query)
    // console.log('req.params:', req.params)
    // console.log('req.files:', req.files)
    // console.log('req.cookies:', req.cookies)
    // console.log('req.jwtDecoded:', req.jwtDecoded)

    //Dieu huong dlieu sang tang service
    const createBoard = await boardService.createNew(req.body)

    //co kqua thi tra ve phia client
    res.status(StatusCodes.CREATED).json(createBoard)

  } catch (error) {
    next(error)
  }
}

const getDetails = async(req, res, next) => {
  try {
    // console.log('req.params:', req.params)
    const boardId = req.params.id

    //Dieu huong dlieu sang tang service
    const board = await boardService.getDetails(boardId)

    //co kqua thi tra ve phia client
    res.status(StatusCodes.OK).json(board)

  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew,
  getDetails
}