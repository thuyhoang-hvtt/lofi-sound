import React, { Component } from 'react';

import './App.css';
import SoundContainer from './containers/SoundContainer/SoundContainer';
import SideBar from './components/Sidebar/Sidebar';
import TimerContainer from './containers/TimerContainer/TimerContainer';
import ComboContainer from './containers/ComboContainer/ComboContainer';
import TodoContainer from './containers/TodoContainer/TodoContainer';

class App extends Component {
  render() {
    return (
      <div >
        <SideBar token={false}>
          <TodoContainer/>
        </SideBar>
      </div>
    );
  }
}

export default App;
