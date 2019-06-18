import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import SwitchBoard from './components/moment';
// renders the switchboard 

// const Key = "3b84024871aef976d646f09db58974da";
class App extends Component {
  
  render(){
    return(  
     <div className="container">
       <SwitchBoard/>
      
     </div>
    );
  }
}

export default App;
