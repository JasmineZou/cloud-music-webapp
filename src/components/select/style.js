import styled from 'styled-components';
import style from '../../assets/global-style';

export const SelectContainer = styled.div`
  input {
    height: 24px;
    line-height: 24px;
    border: 1px solid #E4EAF1;
    border-radius: 2px;
  }
  .scroll {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .scroll-down {
    height: 0px;
    transition: height .3s ease-in-out;
    -moz-transition: height .3s ease-in-out; /* Firefox 4 */
    -webkit-transition: height .3s ease-in-out; /* Safari and Chrome */
    -o-transition: height .3s ease-in-out; /* Opera */
  }
  .scroll-up {
    height: 281px;
    transition: height .3s ease-in-out;
    -moz-transition: height .3s ease-in-out; /* Firefox 4 */
    -webkit-transition: height .3s ease-in-out; /* Safari and Chrome */
    -o-transition: height .3s ease-in-out; /* Opera */
  }
`


export const SelectContent = styled.div`
  .head {
    display: flex;
    border-bottom: 1px solid #E4EAF1;
    span {
      width: 50%;
      text-align: center;
      display: inline-block;
      border: 0;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      background: #fff;
    }
    .cancel {
      border-right: 1px solid #E4EAF1;
      color: #999;
    }
    .confirm {
      color: ${style["theme-color"]};
    }
  }
  .list {
    position: relative;
    height: 200px;
    background: #fff;
    padding: 20px 0;
  }
  i {
    position: absolute;
    // z-index: 10;
    left: 0;
    width: 100%;
    pointer-events: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .border-bottom-1px {
    top: 0;
    height: 84px;
    background: -webkit-linear-gradient(bottom,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));
    background: linear-gradient(0deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));
  }
  .border-top-1px {
    height: 116px;
    bottom: 0;
    background: -webkit-linear-gradient(top,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));
    background: linear-gradient(180deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));
}
  ul {
    position: absolute;
    width: 100%;
    top: 0;
    li {
      text-align: center;
      height: 42px;
      line-height: 42px;
    }
  }
`;

export const Mask = styled.div`
  background: #000;
  opacity: 0.5;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const Line = styled.div`
  height: 40px;
  border-top: 1px solid #E4EAF1;
  border-bottom: 1px solid #E4EAF1;
  position: absolute;
  top: 84px;
  width: 100%;
  z-index: 10;
`;


