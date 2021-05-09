import axios, { AxiosResponse } from "axios";
import { IItems, ItemType } from "../reducers/items-reducer/items";
import {API_ITEMS_KEY, API_ITEMS_URL, API_USERS_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const itemsInstance = axios.create({
  withCredentials: true,
  baseURL: API_ITEMS_URL,
  headers: {
    "API_KEY": API_ITEMS_KEY
  }
});

const retreiveToken = async () => {
  return await AsyncStorage.getItem('userToken');
}

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
  getlastId():any {
    return itemsInstance.get('items/lastid');
  }
};

export const usersAPI = {
  login(email: string, password: string): any {
    return usersInstance.post('auth/login', {email, password});
  },
  register(email:string, password: string): any {
    return usersInstance.post('auth/register', {email, password});
  },
  getUser(number: number, config: any): any {
    return usersInstance.get(`users/${number}`, config);
  },
  getAllPosts(page: number, limit: number, config: any): any {
    return usersInstance.get(`posts/all?page=${page}&limit=${limit}`, config);
  },
  createPost(title: string, content: string, userId: number, config: any): any {
    return usersInstance.post(`posts/add`, {title, content, userId}, config);
  },
  getUserByEmail(email: string, config: any): any {
    return usersInstance.get(`users/all?email=${email}`, config);
  },
  deleteUserPosts(id: any, config: any): any {
    return usersInstance.delete(`users/posts/${id}`, config);
  }
 }
