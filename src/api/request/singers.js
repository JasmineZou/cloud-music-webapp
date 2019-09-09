import { axiosInstance } from '../config';

/**
 *
 * @param {*歌手类型} categoryId
 * @param {*按首字母索引查找参数} initial
 */
export const getCategoryRequest = () => {
  return new Promise((resolve) => {
    resolve([{
      name: '入驻歌手',
      cat: 5001
    }, {
      name: '华语男歌手',
      cat: 1001
    }, {
      name: '华语女歌手',
      cat: 1002
    }, {
      name: '华语组合/乐队',
      cat: 1003
    }, {
      name: '欧美男歌手',
      cat: 2001
    }, {
      name: '欧美女歌手',
      cat: 2002
    }, {
      name: '欧美组合/乐队',
      cat: 2003
    }, {
      name: '日本男歌手',
      cat: 6001
    }, {
      name: '日本女歌手',
      cat: 6002
    }, {
      name: '日本组合/乐队',
      cat: 6003
    }, {
      name: '韩国男歌手',
      cat: 7001
    }, {
      name: '韩国女歌手',
      cat: 7002
    }, {
      name: '韩国组合/乐队',
      cat: 7003
    }, {
      name: '其他男歌手',
      cat: 4001
    }, {
      name: '其他女歌手',
      cat: 4002
    }, {
      name: '其他组合/乐队',
      cat: 4003
    }]);
  });
}

export const getSingersListRequest = (categoryId, initial) => {
  const url = initial ? `/artist/list?cat=${categoryId}&initial=${initial}` : `/artist/list?cat=${categoryId}`
  return axiosInstance.get(url);
}