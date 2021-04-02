import {AnyAction} from "redux";
import {searchActionTypes} from "../../types";

type SearchType = "name" | "position";
type SectorType = "A" | "B" | "C";

export interface ISearchState {
  searchBy: SearchType;
  sector: SectorType;
  filterModal: boolean;
}

let initialState: ISearchState = {
  searchBy: "name",
  sector: "A",
  filterModal: false
}

let searchReducer = (state: ISearchState = initialState, action: AnyAction) => {
  switch (action.type) {
    case searchActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        filterModal: !state.filterModal
      }

    case searchActionTypes.CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchBy: action.searchBy
      }
    case searchActionTypes.CHANGE_SECTOR:
      return {
        ...state,
        sector: action.sector
      }
    default:
        return state;
  }
}
