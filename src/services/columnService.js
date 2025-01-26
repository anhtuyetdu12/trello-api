
/**
 * Updated by anhtuyetdu.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { columnModel } from '~/models/columnModel'
import { boardModel } from '~/models/boardModel'
import { cardModel } from '~/models/cardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  try {
    const newColumn = {
      ...reqBody
    }
    //goi toi tang Model de xly ban ghi newColumn vao trong Database
    const createColumn = await columnModel.createNew(newColumn)
    //lay ban ghi Column sau khi goi
    const getNewColumn = await columnModel.findOneById(createColumn.insertedId)

    if (getNewColumn) {
      //xly cau truc data o day trc khi tra dlieu ve
      getNewColumn.cards = []
      //cap nhat mang columnOrderIds trong collection boards
      await boardModel.pushColumnOrderIds(getNewColumn)

    }

    return getNewColumn
  } catch (error) {
    throw error
  }
}

const update = async (columnId, reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }
    const updatedColumn = await columnModel.update(columnId, updateData)

    return updatedColumn
  } catch (error) {
    throw error
  }
}

const deleteItem = async (columnId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const targetColumn = await columnModel.findOneById(columnId)
    if (!targetColumn) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Column not found')
    }

    //xoa column
    await columnModel.deleteOneById(columnId)
    //xoa all card thuoc column
    await cardModel.deleteManyByColumnId(columnId)
    //Xoa columnId trong mang columnOrderIds cua Board chua no
    await boardModel.pullColumnOrderIds(targetColumn)

    return { deleteResult: 'Column and its Cards deleted successfully!' }
  } catch (error) {
    throw error
  }
}

export const columnService = {
  createNew,
  update,
  deleteItem
}