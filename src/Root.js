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

const Root = () => (
  <SEO>
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
  </SEO>
);

export default Root;
