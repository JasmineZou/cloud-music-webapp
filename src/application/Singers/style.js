import styled from 'styled-components';
import style from '../../assets/global-style';

export const SingersContainer = styled.div`
  background: #fff;
  .top {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    .cate {
      margin-right: 10px;
    }
  }
`

export const SingersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  li {
    // height: 120px;
    width: 32%;
    // margin-bottom:
    img {
      width: 100%;
      height: 120px;
      border-radius: 3px;
    }
    p {
      height: 30px;

    }
  }
`
