import React, { Component, Fragment } from 'react';
import { Row, Col, Progress, Input, Icon, Card, Statistic, Button } from 'antd';
import Cleave from 'cleave.js/react';

import { connect } from 'react-redux';
import { setTimer } from '../../store/actions/lofiActions';


const initTimer = {
  hour: 0,
  min: 0,
  sec: 5,
  percent: 0
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
  borderWidth: 2,
  backgroundColor: 'inherit',
  textAlign: 'center',
  fontSize: 40
};



class TimerContainer extends Component {
  state = {
    ...initTimer
  }

  controlHour = (type) => {
    const { hour } = this.state;
    this.setState({
      hour: type === '+' ? (hour < 23 ? hour + 1 : hour) : (hour > 0 ? hour - 1 : hour)
    })
  }

  controlMin = (type) => {
    const { min } = this.state;
    this.setState({
      min: type === '+' ? (min < 60 ? min + 1 : min) : (min > 0 ? min - 1 : min)
    })
  }

  controlSec = (type) => {
    const { sec } = this.state;
    this.setState({
      sec: type === '+' ? (sec < 60 ? sec + 1 : sec) : (sec > 0 ? sec - 1 : sec)
    })
  }

  _percentRealtime = () => this.setState(prevState => {
    const { deadline, initial } = this.props;
    const percent = 100*(deadline - Date.now())/(deadline - initial);
    return {
      percent
    }
  })
  

  startCounting = (deadline) => {
    this.timer = setInterval(() => this._percentRealtime(), 10);
    this.props.setTimer({ isCounting: true, deadline});
  }

  stopCounting = () => {
    clearInterval(this.timer);
    this.props.setTimer({ isCounting: false });
    this.setState({
      ...initTimer
    })
  }

  pauseCounting = (deadline) => {
    const remain = Math.floor((deadline - Date.now())/1000);
    const hour = Math.floor(remain/3600);
    const min = Math.floor((remain - hour*3600)/60);
    const sec = remain - hour*3600 - min*60;
    clearInterval(this.timer);
    this.props.setTimer({ isCounting: false, deadline: 1 });
    this.setState({
      percent: 0,
      hour,
      min,
      sec
    });
  }

  onChangeHandle = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: Number(e.target.value)
    })
  }

  componentDidMount() {
    if (this.props.isCounting) {
      this.timer = setInterval(() => this._percentRealtime(), 10);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { hour, min, sec, percent } = this.state;
    const { isCounting, deadline } = this.props;
    const isPause = deadline !== 0 && !isCounting;
    const newDeadline = 1000*(3600*hour + 60*min + sec);
    return (
      <Fragment>
        <Row style={{ paddingBottom: 64 }}>
          <Progress
            type="circle"
            width={250}
            strokeWidth={4}
            strokeColor='#707070'
            percent={percent}
            status="active"
            format={() => (
              isPause 
              ?
              <div><p style={{fontSize: 40}}>RESUME</p></div>
              :
              <Statistic.Countdown
                valueStyle={{
                  fontSize: 48
                }}
                value={isCounting ? deadline : 0}
                onFinish={isCounting ? () =>this.stopCounting() : null}
              />
            )}
          />
        </Row>
        {
          isCounting 
          ?
          <Row type="flex" justify="center" style={{ paddingTop: 64}}>
            <Col span={6}>
              <Button 
                style={controlBtnStyle}
                icon="close-circle" 
                shape="round"
                onClick={this.stopCounting.bind(this)}
              >Cance</Button>
            </Col>
            <Col span={6}>
              <Button 
                style={controlBtnStyle}
                icon="pause-circle" 
                shape="round"
                onClick={() => this.pauseCounting(deadline)}
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
                onClick={() => this.controlHour('+')}
              />
              <br/>
              <Cleave
                className="shn-timer" 
                id="hour"
                options={{
                  time: true,
                  timePattern: ['h']
                }}
                style={inputStyle}
                value={hour}
                onChange={this.onChangeHandle.bind(this)}
                placeholder="H"
                tabIndex="1"
              />
              <br/>
              <Button 
                style={timeBtnStyle} 
                icon="down" 
                shape="circle"
                onClick={() => this.controlHour('-')}
              />
            </Col>
            <Col span={1}><Icon type="heart"/></Col>
            <Col span={2} style={{ textAlign: 'center' }}>
              <Button 
                style={timeBtnStyle} 
                icon="up" 
                shape="circle"
                onClick={() => this.controlMin('+')}
              />
              <br/>
              <Cleave
                className="shn-timer" 
                id="min"
                options={{
                  time: true,
                  timePattern: ['m']
                }}
                style={inputStyle}
                value={min}
                onChange={this.onChangeHandle}
                placeholder="M"
                tabIndex="2"
              />
              <br/>
              <Button 
                style={timeBtnStyle} 
                icon="down" 
                shape="circle"
                onClick={() => this.controlMin('-')}
              />
            </Col>
            <Col span={1}><Icon type="heart"/></Col>
            <Col span={2} style={{ textAlign: 'center' }}>
              <Button 
                style={timeBtnStyle} 
                icon="up" 
                shape="circle"
                onClick={() => this.controlSec('+')}
              />
              <br/>
              <Cleave
                className="shn-timer" 
                id="sec"
                options={{
                  time: true,
                  timePattern: ['s']
                }}
                style={inputStyle}
                value={sec}
                onChange={this.onChangeHandle}
                placeholder="S"
                tabIndex="3"
              />
              <br/>
              <Button 
                style={timeBtnStyle} 
                icon="down" 
                shape="circle"
                onClick={() => this.controlSec('-')}
              />
            </Col>
            <Col span={6}>
              <Button 
                style={controlBtnStyle}
                icon="clock-circle" 
                shape="round"
                onClick={() => this.startCounting(newDeadline + Date.now())}
                tabIndex="4"
              >Start</Button>
            </Col>
          </Row>
        }
      </Fragment>
    );
  }
}


const mapStateToProps = state => {
  const { isCounting, initial, deadline } = state.lofi.timer;
  return {
    isCounting,
    initial,
    deadline
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTimer: (timer) => dispatch(setTimer(timer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);