/**
 * Updated by anhtuyetdu.com's author on August 17 2024
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes'
import { columnService } from '~/services/columnService'


const createNew = async(req, res, next) => {
  try {

    //Dieu huong dlieu sang tang service
    const createdColumn = await columnService.createNew(req.body)

    //co kqua thi tra ve phia client
    res.status(StatusCodes.CREATED).json(createdColumn)

  } catch (error) {
    next(error)
  }
}

const update = async(req, res, next) => {
  try {
    // console.log('req.params:', req.params)
    const columnId = req.params.id

    //Dieu huong dlieu sang tang service
    const updatedColumn = await columnService.update(columnId, req.body)

    //co kqua thi tra ve phia client
    res.status(StatusCodes.OK).json(updatedColumn)

  } catch (error) {
    next(error)
  }
}


export const columnController = {
  createNew,
  update
}