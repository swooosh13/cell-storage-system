import {AnyAction} from "redux";
import {AppDispatch, store} from "../../store";
import {itemsAPI} from "../../api/api";
import {useDispatch} from "react-redux";

export type ItemType = {
  id: number;
  name: string;
  description: string;
  sector: string;
  position: string;
};

export interface IItems extends Array<ItemType> {
}

export interface IItemsReducer {
  allItems: IItems;
  isFetching: boolean;
  showAddModal: boolean;
}

let initialState: IItemsReducer = {
  allItems: [],
  isFetching: false,
  showAddModal: false,
};

export enum ItemsActionTypes {
  FETCH_ITEMS = "FETCH_ITEMS",
  ADD_ITEM = "ADD_ITEM",
  DELETE_ITEM = "DELETE_ITEM",
  UPDATE_UTEM = "UPDATE_UTEM",
  CLEAR_ITEMS = "CLEAR_ITEMS",
  TOGGLE_SHOW_MODAL = "TOGGLE_SHOW_MODAL"
}

let itemsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ItemsActionTypes.FETCH_ITEMS:
      return {
        ...state,
        allItems: action.items,
      };

    case ItemsActionTypes.DELETE_ITEM:
      return {
        ...state,
        allItems: state.allItems.filter((item) => item.id !== action.id),
      };

    case ItemsActionTypes.ADD_ITEM:
      return {
        ...state,
        allItems: [...state.allItems, action.item],
      };

    case ItemsActionTypes.UPDATE_UTEM:
      return {
        ...state,
        allItems: state.allItems.filter((item) => {
          if (item.id === action.id) {
            item.name = action.name;
            item.description = action.description;
            item.position = action.position;
          }
          return item;
        }),
      };
    case ItemsActionTypes.TOGGLE_SHOW_MODAL:
      return {
        ...state,
        showAddModal: !state.showAddModal
      }
    case ItemsActionTypes.CLEAR_ITEMS:
      return [];
    default:
      return state;
  }
};

export const getItemById = (val: number) => async (dispatch: AppDispatch) => {
  let response = await itemsAPI
    .getItemById(val)
    .then((response: any) => response.data);
  dispatch({type: ItemsActionTypes.FETCH_ITEMS, items: response});
};

export const addItem = (item: ItemType) => async (dispatch: AppDispatch) => {
  let response;
  try {
    response = await itemsAPI.postItem(item);
  } catch (e) {
    console.log(e);
    console.log(response);
    return;
  } finally {
    console.log("item", item);
  }
  dispatch({type: ItemsActionTypes.ADD_ITEM, item});
}

export const loadItems = (val: string) => async (dispatch: AppDispatch) => {
    let response;

    try {
      if (val === "") {
        console.log("loadItems(): byAll");
        response = await itemsAPI
          .getItems()
          .then((response: any) => response.data);
      } else {
        console.log("loadItems(): byName");
        response = await itemsAPI.getItemsByName(val).then((response: any) => response.data);
      }

    } catch (e) {
      console.log(e);
      return;
    }

    dispatch({type: ItemsActionTypes.FETCH_ITEMS, items: response});
  }
;

export const clearItems = () => (dispatch: AppDispatch) => {
  dispatch({type: ItemsActionTypes.CLEAR_ITEMS});
}

export const removeItem = (id: number) => async (dispatch: AppDispatch) => {
  let response: any = await itemsAPI
    .removeItem(id)
    .then((response: any) => response.data);

  dispatch({type: ItemsActionTypes.DELETE_ITEM, id});
}

export const toggleAddModal = () => (dispatch: AppDispatch) => {
  dispatch({type: ItemsActionTypes.TOGGLE_SHOW_MODAL});
};

export default itemsReducer;
