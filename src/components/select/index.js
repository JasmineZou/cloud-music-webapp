import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import BScroll from "better-scroll";
import { SelectContainer, Mask, Line, SelectContent } from './style';



function Select(props) {
  const [isShowSelect, setIsShowSelect ] = useState(false);
  const [bScroll, setBScroll] = useState();
  const scrollContainerRef = useRef();
  const { list } = props;
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
      // wheel: {
      //   selectedIndex: 0,
      //   wheelWrapperClass: 'wheel-scroll',
      //   wheelItemClass: 'wheel-item',
      //   rotate: 0,
      // },
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    }
    // eslint-disable-next-line
  }, [list.length]);

  useEffect(() => {
    if(!bScroll) return;
    bScroll.on('touchEnd', (scroll) => {
      console.log(list[bScroll.getSelectedIndex()]);
      // const index = Math.floor(Math.abs(scroll.y) / 42);
      // bScroll.wheelTo(index)
    })
    return () => {
      bScroll.off('scroll');
    }
  }, [bScroll, list]);


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
};

Select.propTypes = {
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  maskClose: PropTypes.bool,
}
export default React.memo(Select);
