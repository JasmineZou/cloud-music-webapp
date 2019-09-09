import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SelectContainer, Mask, Line, SelectContent, ScrollSelect } from './style';

function Select(props) {
  const [isShowSelect, setIsShowSelect ] = useState(false);
  const { list } = props;
  const { confirmText, cancelText, maskClose } = props;
  useEffect(() => {

  }, [])


  return (
    <SelectContainer>
      <input onClick={() => setIsShowSelect(!isShowSelect)} />
      { isShowSelect ?
          <Mask onClick={() => {
            if(maskClose) {
              setIsShowSelect(!isShowSelect)
            }
          }} ></Mask>
        : null }
          <div className={`scroll ${isShowSelect ? "scroll-up" : "scroll-down"}`}>
            <SelectContent>
              <div className="head">
                <span className="cancel" onClick={() => setIsShowSelect(!isShowSelect)}>{cancelText}</span>
                <span className="confirm">{confirmText}</span>
              </div>
              <div className="list">
                <ul>
                  {list.length ? list.map(item => <li key={item.cat}>{item.name}</li>) : null}
                </ul>
                <Line></Line>
                <i className="border-top-1px"></i>
                <i className="border-bottom-1px"></i>
              </div>
            </SelectContent>
          </div>
        {/* </div> : null
      } */}


    </SelectContainer>
  )
}
Select.defaultProps = {
  confirmText: '确定',
  cancelText: '取消',
  maskClose: true,
};

Select.propTypes = {
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  maskClose: PropTypes.bool,
}
export default React.memo(Select);
