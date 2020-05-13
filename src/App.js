import React from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import VenueDetails from './components/VenueDetails'
import Footer from './components/Footer'


// library.add(fab, faCheckSquare, faCoffee)


function App(props) {
  
  

  return (
    <div className="App">

      <Route 
        exact path="/" 
        render={props => <Home/>
        }/>

      <Route 
        exact path="/venue" 
        render={props => <VenueDetails {...props} /> } />
        <Footer/>
    </div>
  );
}
export default App;
