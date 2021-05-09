import {AnyAction} from "redux";

export type PostType = {
  id: number;
  title: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export interface IPosts extends Array<PostType> {
}

export interface IPostsReducer {
  allPosts: IPosts;
  userPosts: IPosts;
  totalCount: number;
}

let initialState: any = {
  allPosts: [],
  userPosts: [],
  totalCount: 0,
};

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  ADD_POST = "ADD_POST",
  DELETE_USER_POSTS = "DELETE_USER_POSTS",
  GET_USER_POSTS ="GET_USER_POSTS"
}


let postsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return {
        ...state,
        allItems: action.items,
      };
    case PostsActionTypes.ADD_POST:
      return {
        ...state,
        allItems: [...state.allItems, action.item],
      };
    case PostsActionTypes.GET_USER_POSTS:
      return [];
    default:
      return state;
  }
};

export default postsReducer;
