import { slugify } from '~/utils/formatters'  
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

    //tra ve kqua, trong service luon co return
    return newBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}