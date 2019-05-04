import React, { Fragment, Component } from 'react';
import { Card, Modal, Icon, Button, Form, Checkbox, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import Home from './Home';

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { state = {} } = this.props.location;
    const { visible } = state;
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Modal
          visible={true}
          className="auth"
          footer={[]}
          width={'30%'}
        >
          <Row type="flex" align="center" justify="center">
            <p style={{ fontSize: 32}}>Login and Enjoy!</p>
          </Row>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Row type="flex" align="center" justify="center">
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Email" />
                )}
              </Form.Item>
            </Row>
            <Row type="flex" align="center" justify="center">
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
            </Row>
            <Form.Item>
                
              <Button
                style={{
                  backgroundColor: 'rgb(64, 235, 141)',
                  width: 200,
                  heihgt: 32,
                  borderWidth: 0,
                  borderRadius: 25,
                  marginBottom: 64
                }}
              >Enjoy, Now!</Button>
              <br/>
              <Button
                style={{
                  backgroundColor: 'rgb(64, 110, 235)',
                  width: 200,
                  heihgt: 32,
                  borderWidth: 0,
                  borderRadius: 25
                }}
                icon="facebook"
              > Facebook</Button>
              <br/>
              <Button
                style={{
                  backgroundColor: 'rgb(194, 71, 71)',
                  width: 200,
                  heihgt: 32,
                  borderWidth: 0,
                  borderRadius: 25
                }}
                icon="google"
              > Google</Button>
            </Form.Item>
            <Form.Item>
              <Link to='/signup' style={{marginRight: 32}}>Create an account</Link>
              <Link to='/'>Forgot password!</Link>
            </Form.Item>
          </Form>
        </Modal>
        <Home/>
      </Fragment>
    );
  };
}

export default Form.create({ name: 'signup_form'})(Login);