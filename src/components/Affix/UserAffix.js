import React, { Fragment, Component } from 'react';
import { Button, Icon, Affix } from 'antd';


const normalStyle = { 
  fontSize: '32px',  
  cursor: 'pointer' 
}

const activeStyle = {
  fontSize: '36px',  
  cursor: 'pointer',
  color: '#fff'
}


const UserAffix = ({combo, timer, editor}) => (
  <Fragment>
    {/* <Affix offsetTop={100} style={{textAlign: 'center'}}>
      <Icon 
        style={combo ? activeStyle : normalStyle} 
        type="logout"
      />
    </Affix>
    <Affix offsetTop={170} style={{textAlign: 'center'}}>
      <Icon
        style={timer ? activeStyle : normalStyle}
        type="user"
      />
    </Affix> */}
    <Affix offsetBottom={170} style={{textAlign: 'center'}}>
      <Icon
        style={editor ? activeStyle : normalStyle} 
        type="poweroff"
      />
    </Affix>
    <Affix offsetBottom={100} style={{textAlign: 'center'}}>
      <Icon
        style={editor ? activeStyle : normalStyle} 
        type="sound"
      />
    </Affix>
  </Fragment>
);

export default UserAffix;