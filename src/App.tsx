import React from 'react';
import AddSentence from './components/AddSentence';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={AddSentence} />
      </Switch>
    </div>
  );
}

export default App;
