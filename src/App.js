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
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact='true' element={<Users />} />
          <Route path="/:userId/places" exact='true' element={<UserPlaces />} />
          <Route path="/places/new" exact='true' element={<NewPlaces />} />
          <Route path="/places/:placeId" exact='true' element={<UpdatePlace />} />
          <Route path="/auth" exact='true' element={<Auth />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
