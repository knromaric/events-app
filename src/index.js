import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App/layout/App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './App/store/configureStore';
import ScrollToTop from './App/common/util/ScrollToTop';
const store = configureStore();

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App/>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>, 
  rootEl
  );
}

if(module.hot) {
  module.hot.accept('./App/layout/App.js', ()=>{
    setTimeout(render)
  })
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
