import React, { Component, Fragment } from 'react';
import { Button, Row, Col, Icon } from 'antd';


const initState = {
  combos: [
    {
      title: 'Favourite #1',
      sounds: []
    }
  ]
}

const comboBtnStyle = {
  width: '90%',
  height: 72,
  margin: '8px 0',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  border: '0px solid rgba(242, 242, 242, 0.3)',
  fontSize: 24
};


const ComboButton = ({ combos, ...other }) => {
  return (
    <Fragment>
      {
        combos.map((combo, id) => (
          <Row type="flex" align="middle" justify="center">
            <Col span={12}>
              <Button style={comboBtnStyle} shape="round" key={id}>{combo.title}</Button>
            </Col>
          </Row>
        ))
      }
      {
        (combos.length < 5)
        &&
        [...Array(5 - combos.length).keys()].map(id => (
          <Row type="flex" align="middle" justify="center">
            <Col span={12}>
              <Button disabled style={comboBtnStyle} shape="round" key={'_' + id}>Save Combo</Button>
            </Col>
          </Row>
        ))
      }
    </Fragment>
  );
}
 
class ComboContainer extends Component {
  state = initState;


  render() {
    const { combos } = this.state;

    return (
      <ComboButton combos={combos} />
    );
  }
}

export default ComboContainer;