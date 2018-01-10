var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/app/app.jsx');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(52, 52, 119)'
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <Main/>
  </MuiThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById('app'));
