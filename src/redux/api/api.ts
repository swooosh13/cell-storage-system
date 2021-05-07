import axios, { AxiosResponse } from "axios";
import { IItems, ItemType } from "../reducers/items-reducer/items";
import {API_ITEMS_KEY, API_ITEMS_URL, API_USERS_URL} from "@env";

const itemsInstance = axios.create({
  withCredentials: true,
  baseURL: API_ITEMS_URL,
  headers: {
    "API_KEY": API_ITEMS_KEY
  }
});

const usersInstance = axios.create({
  withCredentials: true,
  baseURL: API_USERS_URL
});

export const itemsAPI = {
  getItemById(id: number): any {
    return itemsInstance.get(`items?id=${id}`);
  },
  getItems(): any {
    return itemsInstance.get(`items`);
  },
  getItemsByName(name: string): any {
    return itemsInstance.get(`items/searchName/${name}`);
  },
  getItemsByNameAndDescription(name:string, description: string): any {
    return itemsInstance.get(`items/searchItem/${name}/${description}`)
  },
  removeItem(id: number): any {
    return itemsInstance.delete(`items/${id}`);
  },
  postItem(item: ItemType): any {
    return itemsInstance.post('items/', {...item})
  },
  updateItem(id: number, item: ItemType): any {
    return itemsInstance.put(`items/${id}`, item);
  },
};

export const usersAPI = {
  login(email: string, password: string): any {
    return usersInstance.post('auth/login', {email, password});
  },
  register(email:string, password: string): any {
    return usersInstance.post('auth/register', {email, password});
  }
 }
