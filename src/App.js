import React from 'react'
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import MainPost from './Pages/MainPage/MainPost';
import HookahPage from './Pages/HookahPage/HookahPage.jsx';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header/Header';




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