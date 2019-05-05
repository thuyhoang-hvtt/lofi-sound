
import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Empty, Checkbox, Input, Icon } from 'antd';
import Radium from 'radium';

const TodoItem = (props) => (
  <Row type="flex" justify="center">
    <Col span={12}>
      <div className='shn-todo-item'>
        <div>{props.children}</div>
      </div>
    </Col>
  </Row>
);

const initState = {
  todos: ["100 push-ups", "Run 10km", "Squart 100 times"]
};

class TodoContainer extends Component {
  state = initState;

  render() {
    const { todos } = this.state;

    return (
      <Fragment>
        <Row type="flex" justify="center" style={{ marginBottom: 64}}>
          <Col span={12}>
            <Input 
              className="shn-input"
              suffix={
                <Icon type="caret-right" style={{ fontSize: 24 }}/>
              } 
              placeholder="What should I do?"
            />
          </Col>
        </Row>
        {
          todos.length === 0
          ?
          <Empty/>
          :
          todos.map((todo, id) => (<TodoItem key={id}>{todo}</TodoItem>))
        }
      </Fragment>
    );
  }
}


export default Radium(TodoContainer);