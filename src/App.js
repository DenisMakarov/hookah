import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import Header from './component/Header/Header';
import MainPost from './component/MainPost/MainPost';
import HookahPage from './component/HookahPage/HookahPage.jsx';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';




const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <Router>
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path='/' exact component={MainPost}/>
          <Route path='/hookahpage' component={HookahPage}/>
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  </Router>     
);

export default App;