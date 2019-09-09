//src/appliction/Home/index.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/loading';

import * as actionTypes from './store/actionCreators';
import Select from '../../components/select';
import { SingersContainer } from './style';

function Singers(props) {
  const { categoryList, singersList, enterLoading } = props;
  const { getCategoryDataDispatch, getSingersListDataDispatch } = props;
  useEffect(() => {
    if (!categoryList.size) {
      getCategoryDataDispatch();
    }
    // if (!singersList.size) {
    //   getSingersListDataDispatch();
    // }
    // eslint-disable-next-line
  },[]);
  const categoryListJS = categoryList ? categoryList.toJS() : [];
  const singersListJS = singersList ? singersList.toJS() : [];
  return (
    <SingersContainer>
      <div className="top">
        <span className="cate">分类</span>
        <Select list={categoryListJS}></Select>
      </div>
      {enterLoading ? <Loading/> : null}
    </SingersContainer>
  )
}

const mapStateToProps = (state) => ({
  categoryList: state.getIn(['singers', 'categoryList']),
  singersList: state.getIn(['singers', 'singersList']),
  enterLoading: state.getIn(['singers', 'enterLoading'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryDataDispatch() {
      dispatch(actionTypes.getCategoryList());
    },
    getSingersListDataDispatch() {
      dispatch(actionTypes.getSingersList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));
