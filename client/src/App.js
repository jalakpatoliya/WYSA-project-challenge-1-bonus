import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import SignUp from './components/sign-up/sign-up.component';
import SignIn from './components/sign-in/sign-in.component';
// import Movie from './pages/movie/movie.component';
// import TicketPage from './pages/tickets/ticket.component';
// import SleepCollectPage from './pages/sleep/sleep.component';

import SleepCard1 from './components/sleep/sleep.card.component1';
import SleepCard2 from './components/sleep/sleep.card.component2';
import SleepCard3 from './components/sleep/sleep.card.component3';
import SleepCard4 from './components/sleep/sleep.card.component4';
import SleepCard5 from './components/sleep/sleep.card.component5';


import { CurrentUserProvider } from './contexts/current-user.context';
import { SelectedDataProvider } from './contexts/selected-data.context';

const App = () => {
  return (
    <div className="App">
      <CurrentUserProvider>
        <SelectedDataProvider>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/sleep/collect/1" component={SleepCard1} />
            <Route exact path="/sleep/collect/2" component={SleepCard2} />
            <Route exact path="/sleep/collect/3" component={SleepCard3} />
            <Route exact path="/sleep/collect/4" component={SleepCard4} />
            <Route exact path="/sleep/collect/5" component={SleepCard5} />
            {/* <Route exact path="/movie" component={Movie} /> */}
            {/* <Route exact path="/ticket" component={TicketPage} /> */}
          </Switch>
        </SelectedDataProvider>
      </CurrentUserProvider>
    </div>
  );
};

export default App;
