import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'; //renderRoutes读取路由配置转化为Route标签
import { GlobalStyle } from  './style';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index.js';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes(routes) }
      </HashRouter>
    </Provider>
  );
}
export default App;