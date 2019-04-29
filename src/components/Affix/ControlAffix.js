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


const ControlAffix = ({combo, timer, editor}) => (
  <Fragment>
    <Affix offsetTop={100} style={{textAlign: 'center', padding: '10px 0'}}>
      <Icon 
        style={combo ? activeStyle : normalStyle} 
        type="star"
      />
    </Affix>
    <Affix offsetTop={170} style={{textAlign: 'center', padding: '10px 0'}}>
      <Icon
        style={timer ? activeStyle : normalStyle}
        type="clock-circle"
      />
    </Affix>
    <Affix offsetTop={240} style={{textAlign: 'center', padding: '10px 0'}}>
      <Icon
        style={editor ? activeStyle : normalStyle} 
        type="edit"
      />
    </Affix>
  </Fragment>
);

export default ControlAffix;