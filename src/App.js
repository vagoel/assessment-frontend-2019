import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CreateIncident } from './pages/CreateIncident'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { createStore } from './lib/myRedux'
import incidentReducer from './reducers/incidentReducer';

const myStore = createStore(incidentReducer);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" render={(routeProps) => (<Home {...routeProps} store={myStore}></Home>)} />
          <Route path="/create" render={(routeProps) => (<CreateIncident {...routeProps} store={myStore}></CreateIncident>)} />
        </div>
      </div>
    </Router>
  )
}

export default App
