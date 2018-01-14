import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import registerServiceWorker from './registerServiceWorker';
import App from './App';


global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
};
const theme = createMuiTheme({
  palette: {
    primaryText: grey['50'],
    secondaryText: grey['900'],
  },
});

ReactDOM.render(
    <MuiThemeProvider theme={ theme }>
          <App />
    </MuiThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
