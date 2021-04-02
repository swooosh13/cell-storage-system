// TODO

import axios, { AxiosResponse } from "axios";
import { IItems, ItemType } from "../reducers/items-reducer/items";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://infinite-mountain-18881.herokuapp.com/",
});

export const itemsAPI = {
  getItem(id: number): any {
    return instance.get(`items?id=${id}`);
  },
  getItems(): any {
    return instance.get(`items`);
  },
  removeItem(id: number): any {
    return instance.delete(`items/${id}`);
  },
  postItem(item: ItemType): any {
    return instance.post('items/', {...item})
  },
  updateItems(id: number, item: ItemType): any {},
};
