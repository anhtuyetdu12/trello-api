
/**
 * Updated by anhtuyetdu.com's author on August 17 2023
 * YouTube: https://youtube.com/@anhtuyetdu
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { cardModel } from '~/models/cardModel'
import { columnModel } from '~/models/columnModel'


const createNew = async (reqBody) => {
  try {
    const newCard = {
      ...reqBody
    }
    //goi toi tang Model de xly ban ghi newCard vao trong Database
    const createCard = await cardModel.createNew(newCard)
    //lay ban ghi Card sau khi goi
    const getNewCard = await cardModel.findOneById(createCard.insertedId)

    if (getNewCard) {
      //cap nhat mang cardOrderIds trong collection boards
      await columnModel.pushCardOrderIds(getNewCard)

    }

    return getNewCard
  } catch (error) {
    throw error
  }
}

export const cardService = {
  createNew
}