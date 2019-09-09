import * as actionTypes from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  singersList: [], // 歌手列表
  categoryList: [], // 歌手类型
  enterLoading: true,
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data);
    case actionTypes.CHANGE_SINGERS_LIST:
      return state.set('singersList', action.data);
    case actionTypes.CHANGE_CATEGORY_LIST:
      return state.set('categoryList', action.data);
    default:
      return state;
  }
}
