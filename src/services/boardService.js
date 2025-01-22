
import { StatusCodes } from 'http-status-codes'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
/**
 * Updated by anhtuyetdu.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    //goi toi tang Model de xly ban ghi newBoard vao trong Database
    const createBoard = await boardModel.createNew(newBoard)
    //lay ban ghi board sau khi goi
    const getNewBoard = await boardModel.findOneById(createBoard.insertedId)
    //tra ve kqua, trong service luon co return
    return getNewBoard
  } catch (error) {
    throw error
  }
}

const getDetails = async (boardId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const board = await boardModel.getDetails(boardId)
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')
    }
    //tra ve kqua, trong service luon co return
    return board
    const createdBoard = await boardModel.createNew(newBoard)
    // console.log(createdBoard)

    //lay ban ghi board sau khi goi
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    // console.log(getNewBoard)
    //tra ve kqua, trong service luon co return
    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew,
  getDetails
}