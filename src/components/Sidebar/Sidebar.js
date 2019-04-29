import React from 'react';
import { Layout, Icon, Menu, Row, Col, Button, Switch, Affix } from 'antd';
import ControlAffix from '../Affix/ControlAffix';
import { Logo } from '../Logo/Logo';

const {Header, Content, Sider, Footer} = Layout;

const normalStyle = {
  fontSize: '24px',
  cursor: 'pointer'
}

const activeStyle = {
  fontSize: '24px',
  cursor: 'pointer',
  color: '#fff'
}

const SideBar = props => {
  return (
    <Layout className="cover">
      <Row style={{ background: 'inherit', padding: '32px'}} type="flex" justify="space-between">
        <Col span={4}>
          {
            props.token  
            ?
            <Logo/>
            :
            <Affix offsetTop={70} style={{textAlign: 'left', padding: '16px 16px'}}>
              <Button
                shape="round" 
                style={{ marginBottom: '16px', borderWidth: 0, width: '96px', fontWeight: 'bold'}}
              >Login</Button>
              <span><Button shape="circle" icon="question" style={{ marginLeft: '10px', borderWidth: 0, color: '#fff' }}/></span>
              <br/>
              <Button shape="round" style={{ borderWidth: 0, width: '96px', fontWeight: 'bold' }}>Signup</Button>
            </Affix>
          }
        </Col>
        <Col span={12}>
          <Logo/>
          <br/>
          <p>Improve focus and boost your productivity.</p>
          <p>Mix different sounds and create your perfect environment.</p>
        </Col>
        <Col span={4}>
          <Row type="flex" justify="end" align="top">
            <Col span={6}><Icon style={normalStyle} type="sound" /></Col>
            <Col span={6}><Icon style={props.bkgStop ? normalStyle : activeStyle} type="poweroff"/></Col>
            {props.token && <Col span={6}><Icon style={props.account ? activeStyle : normalStyle} type="user"/></Col>}
            {props.token && <Col span={6}><Icon style={normalStyle} type="logout"/></Col>}
          </Row>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span={2}>
          {
            props.token 
            &&
            <ControlAffix/>
          }
          
        </Col>
        <Col span={20}>
          <Content 
            style={{ margin: '24px 0 16px', minHeight: '100vh'}}
          >
            {props.children}
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

export default SideBar;