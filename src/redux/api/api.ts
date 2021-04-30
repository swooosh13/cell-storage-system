import axios, { AxiosResponse } from "axios";
import { IItems, ItemType } from "../reducers/items-reducer/items";
import {API_URL, API_TOKEN} from "@env"

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "API_KEY": API_TOKEN
  }
});

export const itemsAPI = {
  getItemById(id: number): any {
    return instance.get(`items?id=${id}`);
  },
  getItems(): any {
    return instance.get(`items`);
  },
  getItemsByName(name: string): any {
    return instance.get(`items/searchName/${name}`);
  },
  getItemsByNameAndDescription(name:string, description: string): any {
    return instance.get(`items/searchItem/${name}/${description}`)
  },
  removeItem(id: number): any {
    return instance.delete(`items/${id}`);
  },
  postItem(item: ItemType): any {
    return instance.post('items/', {...item})
  },
  updateItems(id: number, item: ItemType): any {},
};
