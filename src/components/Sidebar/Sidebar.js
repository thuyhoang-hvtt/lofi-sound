import React, {Component, Fragment} from 'react';
import { Layout, Icon, Menu, Row, Col, Button, Affix } from 'antd';
import { Logo } from '../Logo/Logo';

import { Link } from 'react-router-dom';

const {Header, Content, Sider, Footer} = Layout;

const normalStyle = {
  fontSize: '28px',
  cursor: 'pointer'
}

const activeStyle = {
  fontSize: '30px',
  cursor: 'pointer',
  color: '#fff',
}

const controlBtnStyle = {
  fontSize: 24, 
  width: 40, 
  height: 40,
  backgroundColor: 'inherit',
  borderColor: 'rgba(242,242,242,0.3)',
  borderWidth: 2,
  margin: '16px 0'
};



class SideBar extends Component {

  render() {
    const { content, changeContentHandle } = this.props;
    return (
      <Layout className="cover">
        <Row style={{ background: 'inherit', padding: '32px', minHeight: '150px'}} type="flex" justify="space-between">
          <Col span={4}>
            {
              this.props.token  
              ?
              <Logo/>
              :
              <Affix offsetTop={70} style={{textAlign: 'left', padding: '16px 16px'}}>
                <Button
                  shape="round" 
                  style={{ marginBottom: '16px', borderWidth: 0, width: '96px', fontWeight: 'bold'}}
                >
                <Link to='/login'>Login</Link>
                </Button>
                <span><Button shape="circle" icon="question" style={{ marginLeft: '10px', borderWidth: 0, color: '#fff' }}/></span>
                <br/>
                <Button 
                  shape="round" style={{ borderWidth: 0, width: '96px', fontWeight: 'bold' }}
                >
                <Link to='/signup'>Signup</Link>
                </Button>
              </Affix>
            }
          </Col>
          <Col span={12}>
            {
              this.props.token
              ?
              null
              :
              <div>
                <Logo/>
                <br/>
                <p>Improve focus and boost your productivity.</p>
                <p>Mix different sounds and create your perfect environment.</p>
              </div>
            }
          </Col>
          <Col span={4}>
            <Row type="flex" justify="end" align="top">
              <Col span={6}><Icon style={normalStyle} type="sound" /></Col>
              <Col span={6}><Icon style={this.props.bkgStop ? normalStyle : activeStyle} type="poweroff"/></Col>
              {this.props.token && <Col span={6}><Icon style={this.props.account ? activeStyle : normalStyle} type="user"/></Col>}
              {this.props.token && <Col span={6}><Icon style={normalStyle} type="logout"/></Col>}
            </Row>
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={2}>
            {
              this.props.token 
              &&
              <Fragment>
                <Affix offsetTop={100} style={{textAlign: 'center', padding: '10px 0'}}>
                  <Icon 
                    style={content === 'SOUND_CONTENT' ? activeStyle : normalStyle} 
                    type="appstore"
                    onClick={() => changeContentHandle('SOUND_CONTENT')}
                  />
                </Affix>
                <Affix offsetTop={170} style={{textAlign: 'center', padding: '10px 0'}}>
                  <Icon 
                    style={content === 'COMBO_CONTENT' ? activeStyle : normalStyle} 
                    type="star"
                    onClick={() => changeContentHandle('COMBO_CONTENT')}
                  />
                </Affix>
                <Affix offsetTop={240} style={{textAlign: 'center', padding: '10px 0'}}>
                  <Icon
                    style={content === 'TIMER_CONTENT' ? activeStyle : normalStyle}
                    type="clock-circle"
                    onClick={() => changeContentHandle('TIMER_CONTENT')}
                  />
                </Affix>
                <Affix offsetTop={310} style={{textAlign: 'center', padding: '10px 0'}}>
                  <Icon
                    style={content === 'TODO_CONTENT' ? activeStyle : normalStyle} 
                    type="edit"
                    onClick={() => changeContentHandle('TODO_CONTENT')}
                  />
                </Affix>
              </Fragment>
            }
            
          </Col>
          <Col span={20}>
            <Content 
              style={{ margin: '24px 0 16px', minHeight: '100vh'}}
            >
              {this.props.children}
            </Content>
          </Col>
          <Col span={2}>
            
          </Col>
        </Row>
        
        <Footer style={{ background: 'inherit', padding: 0}}>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={8}>
              <Logo small/>
            </Col>
            <Col san={8}>
              <Menu
                mode="horizontal"
                style={{ backgroundColor: 'inherit'}}
              >
                <Menu.Item>Team</Menu.Item>
                <Menu.Item>Features</Menu.Item>
                <Menu.Item>Terms & Privacy</Menu.Item>
                <Menu.Item>Contact</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Footer>
      </Layout>
    );
  }
}


export default SideBar;