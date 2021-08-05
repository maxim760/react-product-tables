import { IBasketFromServer, IServerProductsData } from "../types/products"
import { Urls } from "../utils/constants"

export const apiProducts = {
  async getAll():Promise<IServerProductsData> {
    const response = await fetch(Urls.Products.getAll)
    if (!response.ok) {
      throw new Error("Не удалось загрузить товары")
    }
    return await response.json() as IServerProductsData
  },
  async send(data: FormData): Promise<IBasketFromServer> {
    const response = await fetch(Urls.Products.send, {
      body: data,
      method: "post",
    })
    if (!response.ok) {
      throw new Error("Не удалось отправить товары")
    }
    return await response.json() as IBasketFromServer
  }
}