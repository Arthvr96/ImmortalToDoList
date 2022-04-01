import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/theme';
import SEO from 'components/templates/SEO/SEO';
import { GlobalStyles } from 'themes/GlobalStyles';
import GlobalContextProvider from 'providers/GlobalContextProvider';
import ToDoList from 'components/views/ToDoList/ToDoList';
import AddTask from 'components/views/AddTask/AddTask';
import NavigationTemplate from 'components/templates/NavigationTemplate/NavigationTemplate';
import { Provider } from 'react-redux';
import { store } from 'store/index';

const Root = () => (
  <SEO>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalContextProvider>
          <Router>
            <NavigationTemplate>
              <Switch>
                <Route path="/addTask">
                  <AddTask />
                </Route>
                <Route path="/">
                  <ToDoList />
                </Route>
              </Switch>
            </NavigationTemplate>
          </Router>
        </GlobalContextProvider>
      </ThemeProvider>
    </Provider>
  </SEO>
);

export default Root;
