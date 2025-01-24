/**
 * Updated by anhtuyetdu.com's author on August 17 2024
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes'
import { cardService } from '~/services/cardService'


const createNew = async(req, res, next) => {
  try {

    //Dieu huong dlieu sang tang service
    const createdCard = await cardService.createNew(req.body)

    //co kqua thi tra ve phia client
    res.status(StatusCodes.CREATED).json(createdCard)

  } catch (error) {
    next(error)
  }
}



export const cardController = {
  createNew
}