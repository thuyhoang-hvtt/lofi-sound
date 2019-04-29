import React, { Component, Fragment } from 'react';
import { Row, Col, Progress, Input, Icon, Card, Statistic, Button } from 'antd';


const initState = {
  hour: 0,
  min: 0,
  sec: 30,
  isCounting: true
}

const timeBtnStyle = {
  fontSize: 24, 
  width: 40, 
  height: 40,
  backgroundColor: 'inherit',
  borderColor: 'rgba(242,242,242,0.3)',
  borderWidth: 2,
  margin: '16px 0'
};

const controlBtnStyle = {
  width: 200,
  height: 64,
  borderColor: 'rgba(242,242,242,0.5)',
  backgroundColor: 'rgba(242,242,242,0.2)',
  borderWidth: 3,
  fontSize: 32
}

const inputStyle = {
  width: 96,
  height: 64,
  borderColor: 'rgba(255,255,255,0.1)',
  backgroundColor: 'inherit',
  textAlign: 'center',
  fontSize: 40
};

class TimerContainer extends Component {
  state = initState;


  render() {
    const { hour, min, sec, isCounting } = this.state;
    const percent = 10;
    const deadline = Date.now() + 1000*(3600*hour + 60*min + sec);
    return (
      <Fragment>
        <Row style={{ paddingBottom: 64 }}>
          <Progress
            type="circle"
            width={250}
            percent={percent}
            status="active"
            format={() => (
              <Statistic.Countdown
                valueStyle={{
                  fontSize: 48
                }}
                value={deadline}
              />
            )}
          />
        </Row>
        {
          !isCounting 
          ?
          <Row type="flex" justify="center" style={{ paddingTop: 64}}>
            <Col span={6}>
              <Button 
                style={controlBtnStyle}
                icon="close-circle" 
                shape="round"
              >Cance</Button>
            </Col>
            <Col span={6}>
              <Button 
                style={controlBtnStyle}
                icon="pause-circle" 
                shape="round"
              >Pause</Button>
            </Col>
          </Row>
          :
          <Row type="flex" justify="center" align="middle">
            <Col span={6}/>
            <Col span={2} style={{ textAlign: 'center' }}>
              <Button 
                style={timeBtnStyle} 
                icon="up" 
                shape="circle"
              />
              <br/>
              <Input 
                size="large" 
                defaultValue="00"
                style={inputStyle}
              />
              <br/>
              <Button 
                style={timeBtnStyle} 
                icon="down" 
                shape="circle"
              />
            </Col>
            <Col span={1}><Icon type="heart"/></Col>
            <Col span={2} style={{ textAlign: 'center' }}>
              <Button 
                style={timeBtnStyle} 
                icon="up" 
                shape="circle"
              />
              <br/>
              <Input 
                size="large" 
                defaultValue="00"
                style={inputStyle}
              />
              <br/>
              <Button 
                style={timeBtnStyle} 
                icon="down" 
                shape="circle"
              />
            </Col>
            <Col span={1}><Icon type="heart"/></Col>
            <Col span={2} style={{ textAlign: 'center' }}>
              <Button 
                style={timeBtnStyle} 
                icon="up" 
                shape="circle"
              />
              <br/>
              <Input 
                size="large" 
                defaultValue="00"
                style={inputStyle}
              />
              <br/>
              <Button 
                style={timeBtnStyle} 
                icon="down" 
                shape="circle"
              />
            </Col>
            <Col span={6}>
              <Button 
                style={controlBtnStyle}
                icon="clock-circle" 
                shape="round"
              >Start</Button>
            </Col>
          </Row>
        }
      </Fragment>
    );
  }
}




export default TimerContainer;