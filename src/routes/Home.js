import React, { Component } from 'react';

import SoundContainer from '../components//SoundList/SoundContainer';
import SideBar from '../components//Sidebar/Sidebar';
import TimerContainer from '../components//Timer/TimerContainer';
import ComboContainer from '../components//Combos/ComboContainer';
import TodoContainer from '../components//Todos/TodoContainer';

class Home extends Component {
  render() {
    return (
      <SideBar token={false}>
        <SoundContainer/>
      </SideBar>
    );
  }
}

export default Home;
