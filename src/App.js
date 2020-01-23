import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import './App.css';

import Spinner from './components/UI/Spinner/Spinner';
import Layout from './hoc/Layout/Layout';
import MainContent from './containers/MainContent';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faEnvelope, faFileAlt); //Adding to libray/ will use on footer

function App() {
  return (
    <div className='App'>
      <Layout>
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            <Route path='/' exact component={MainContent} />
            <Redirect to='/' />
          </Switch>
        </React.Suspense>
      </Layout>
    </div>
  );
}

export default App;
