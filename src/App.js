import React,{ Component } from 'react';
import Message from './Message';

class App extends Component {
 state = {
   message: 'Hello Craft Acadamy'

  }
 
      inputHandler = (event) =>{
        this.setState({
         message: event.target.value
        })
      }
    
    render(){
      return (
        <div>
          <Message 
          message={this.state.message} 
          />
          <input 
          onBlur={this.inputHandler}
          />
        </div>
        );
    }
    }

export default App;
