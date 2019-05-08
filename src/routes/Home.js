import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeContent } from '../store/actions/lofiActions';

import SoundsUI from '../components/SoundList/SoundsUI';
import SideBar from '../components/Sidebar/Sidebar';
import Timer from '../components/Timer/Timer';
import Combos from '../components/Combos/Combos';
import Todos from '../components/Todos/Todos';
import SoundsPlay from '../components/SoundList/SoundsPlay';
import Login from './Login';
import Signup from './Signup';


class Home extends Component {
  state = {
    content: 'COMBO_CONTENT'
  }

  changeContentHandle = content => {
    this.setState({content: content});
  }

  componentDidMount() {
    console.log('[HOME] already have Mounted!');
  }

  render() {
    const { content } = this.state;
    let display;
    switch (content) {
      case 'SOUND_CONTENT':
        display = <SoundsUI/>
        break;
      case 'COMBO_CONTENT':
        display = <Combos/>
        break;
      case 'TIMER_CONTENT':
        display = <Timer/>
        break;
      case 'TODO_CONTENT':
        display = <Todos/>
        break;
      default:
        display = <SoundsUI/>
    }
    return (
      <SideBar 
        token={true} 
        content={content} 
        changeContentHandle={this.changeContentHandle}
      >
        {display}
        <SoundsPlay/>
      </SideBar>
    );
  }
}

export default Home;
