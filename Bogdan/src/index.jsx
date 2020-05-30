import React from 'React';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import RootRouter from './pages/RootRouter/';
import * as serviceWorker from './serviceWorker';
import './index.css';
import store from './store';


const theme = createMuiTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <RootRouter />
    </BrowserRouter>
  </ThemeProvider>
  </Provider>,
  document.getElementById('hello-example'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.register();
// if (process.env.NODE_ENV !== 'development') {
// }