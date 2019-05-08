import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Empty, Checkbox, Input, Icon } from 'antd';

import { addTodo, removeTodo, restoreTodo } from '../../store/actions/lofiActions';
import { connect } from 'react-redux';

const TodoItem = (props) => (
  <Row type="flex" justify="center">
    <Col span={12}>
      <div className='shn-todo-item'>
        <div>{props.children}</div>
      </div>
    </Col>
  </Row>
);


class TodoContainer extends Component {
  state = {
    todo: ''
  }

  onChange = e => {
    this.setState({todo: e.target.value})
  }

  addTodo = () => {
    const { todo } = this.state;
    if (todo !== '') {
      this.props.addTodo(todo);
      this.setState({todo: ''})
    }
  }

  removeTodo = id => {
    this.props.removeTodo(id);
  }


  render() {
    const { todos } = this.props;
    const { todo } = this.state;
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
              onChange={this.onChange.bind(this)}
              onPressEnter={this.addTodo.bind(this)}
              value={todo}
            />
          </Col>
        </Row>
        {
          todos.length === 0
          ?
          <Empty/>
          :
          todos.map((todo, id) => (
            <Row type="flex" justify="center" key={id}>
              <Col span={12}>
                <div
                  className='shn-todo-item'
                  onClick={() => this.removeTodo(id)}
                >
                  <div>{todo}</div>
                </div>
              </Col>
            </Row>
          ))
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
	return {
		todos: state.lofi.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addTodo: todo => dispatch(addTodo(todo)),
		removeTodo: todo => dispatch(removeTodo(todo)),
		restoreTodo: todo => dispatch(restoreTodo(todo))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);