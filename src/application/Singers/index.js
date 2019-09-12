//src/appliction/Home/index.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/loading';

import * as actionTypes from './store/actionCreators';
import Select from '../../components/select';
import { SingersContainer, SingersList } from './style';

function Singers(props) {
  const { categoryList, singersList, enterLoading } = props;
  const { getCategoryDataDispatch, getSingersListDataDispatch } = props;
  const categoryListJS = categoryList ? categoryList.toJS() : [];
  const singersListJS = singersList ? singersList.toJS() : [];
  useEffect(() => {
    if (!categoryListJS.length) {
      getCategoryDataDispatch();
    }
    if (!singersListJS.length && categoryListJS.length) {
      getSingersListDataDispatch(categoryListJS[0].cat);
    }
    // eslint-disable-next-line
  },[categoryListJS, singersListJS]);
  const onChange = (data) => {
    getSingersListDataDispatch(data.cat);
  }
  console.log(singersListJS);
  return (
    <SingersContainer>
      <div className="top">
        <span className="cate">分类</span>
        <Select list={categoryListJS} onChange={onChange}></Select>
      </div>
      <SingersList>
        {singersListJS.length ? singersListJS.map(item =>
          <li key={item.accountId}>
            <img src={item.picUrl} alt='' />
            <p>{item.name}</p>
          </li>
        ) : null}
      </SingersList>

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
    getSingersListDataDispatch(cat) {
      dispatch(actionTypes.getSingersList(cat))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));
