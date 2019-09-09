//actionCreators.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';//将JS对象转换成immutable对象
import { getCategoryRequest, getSingersListRequest } from '../../../api/request/singers';

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const changeSingersList = (data) => ({
  type: actionTypes.CHANGE_SINGERS_LIST,
  data: fromJS(data)
});

export const changeCategoryList = (data) => ({
  type: actionTypes.CHANGE_CATEGORY_LIST,
  data: fromJS(data)
});

export const getCategoryList = () => {
  return (dispatch) => {
    getCategoryRequest().then(data => {
      dispatch(changeCategoryList(data));
    }).catch(() => {
      console.log("歌手类别数据传输错误");
    })
  }
};

export const getSingersList = (categoryId, initial) => {
  return (dispatch) => {
    getSingersListRequest(categoryId, initial).then(data => {
      dispatch(changeSingersList(data.result));
      dispatch(changeEnterLoading(false));//改变loading
    }).catch(() => {
      console.log("歌手数据传输错误");
    });
  }
};

