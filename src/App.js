import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact='true' element={<Users />} />
          <Route path="/u1/places" exact='true' element={<UserPlaces />} />
          <Route path="/places/new" exact='true' element={<NewPlaces />} />
          <Route path="/auth" exact='true' element={<NewPlaces />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
