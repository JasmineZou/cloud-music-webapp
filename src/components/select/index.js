import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import BScroll from "better-scroll";
import { SelectContainer, Mask, Line, SelectContent } from './style';



function Select(props) {
  const [isShowSelect, setIsShowSelect ] = useState(false);
  const [selected, setSelected ] = useState({name: '', cate: ''});
  const [bScroll, setBScroll] = useState();
  const scrollContainerRef = useRef();
  const { list, onChange } = props;
  const { confirmText, cancelText, maskClose } = props;
  useEffect(() => {
    if (!list.length) {
      return ;
    }
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollY: true,
      scrollX: false,
      probeType: 3,
      bounce:{
        top: true,
        bottom: true
      },
      wheel: true,
      rotate: 0,
      selectedIndex: 0,
    });
    setBScroll(scroll);
    setSelected(list[0]);
    return () => {
      setBScroll(null);
    }
    // eslint-disable-next-line
  }, [list.length]);
  return (
    <SelectContainer>
      <input onClick={() => setIsShowSelect(!isShowSelect)} value={selected.name} onChange={() => onChange(selected)} />
      { isShowSelect ?
          <Mask onClick={() => {
            if(maskClose) {
              setIsShowSelect(false)
            }
          }} ></Mask>
        : null }
          <div className={`scroll ${isShowSelect ? "scroll-up" : "scroll-down"}`}>
            <SelectContent>
              <div className="head">
                <span className="cancel" onClick={() => setIsShowSelect(false)}>{cancelText}</span>
                <span className="confirm" onClick={() => {
                  setSelected(list[bScroll.getSelectedIndex()]);
                  onChange(list[bScroll.getSelectedIndex()]);
                  setIsShowSelect(false);
                }}>{confirmText}</span>
              </div>
              <div className="list">
                <div className="wrapper" ref={scrollContainerRef}>
                  <ul className="wheel-scroll">
                    {list.length ? list.map((item, index) =>
                    <li key={item.cat} className="wheel-item">{item.name}</li>) :
                    null}
                  </ul>
                </div>
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
  onChange: () => {},
};

Select.propTypes = {
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  maskClose: PropTypes.bool,
  onChange: PropTypes.func,
}
export default React.memo(Select);
