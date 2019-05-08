import React, { Component, Fragment } from 'react';
import { Button, Row, Col, Icon, Input } from 'antd';

import { connect } from 'react-redux';

import { addCombo, removeCombo, toggleCombo } from '../../store/actions/lofiActions';


const initState = {
  combos: [
    {
      title: 'Favourite #1',
      sounds: []
    }
  ]
}

const comboBtnStyle = {
  width: '70%',
  height: 54,
  margin: '8px 0',
  borderColor: 'rgba(255, 255, 255, 0.4)',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderWidth: 0,
  fontSize: 20
};

const inputStyle = {
  width: '70%',
  height: '54px',
  margin: '8px 0',
  backgroundColor: 'inherit',
  borderColor: 'rgba(242,242,242,0.4)',
  borderWidth: 3,
  borderRadius: '32px',
  color: '#fff',
  textAlign: 'center',
  fontSize: 20
}
 
class ComboContainer extends Component {
  state = {
    adding: false
  }

  toggleAdding = () => {
    const { adding } = this.state;
    this.setState({ adding: !adding })
  }

  addCombo = e => {
    const { sounds } = this.props.playing;
    const title = e.target.value;
    this.props.addCombo({ title, sounds });
    this.setState({ adding: false });
  }

  pickComboHandle = e => {
    this.props.toggleCombo(Number(e.target.id));
  }
  componentDidMount() {
    console.log('[Combos] mounted!')
  }
  componentWillUnmount() {
    console.log('[Combos] will unmount!');
  }

  componentDidUpdate() {
    console.log('[Combos] updated!');
  }

  render() {
    const { adding } = this.state;
    const { combos, playing } = this.props;
    console.log(combos);
    return (
      <Fragment>
        {
          combos.map((combo, id) => (
            <Row key={id} type="flex" align="middle" justify="center">
              <Col span={12}>
                <Button 
                  id={id} 
                  style={combo.picked ? {...comboBtnStyle, borderWidth: 3, backgroundColor: 'inherit'} : comboBtnStyle} 
                  shape="round"
                  onClick={this.pickComboHandle}
                >
                  {combo.title}
                </Button>
              </Col>
            </Row>
          ))
        }
        <Row type="flex" align="middle" justify="center">
              <Col span={12}>
              {
                !adding 
                ?
                <Button
                  disabled={playing.sounds.length > 0 ? false : true}
                  icon="plus" 
                  style={{...comboBtnStyle, backgroundColor: 'inherit', border: '3px dashed'}} 
                  shape="round"
                  onClick={this.toggleAdding}
                >
                Add Combo
                </Button>
                :
                <Input 
                  autoFocus 
                  style={inputStyle} 
                  onPressEnter={this.addCombo} 
                  onBlur={this.toggleAdding}
                />
              }
              </Col>
            </Row>
        {
          (combos.length < 4)
          &&
          [...Array(4 - combos.length).keys()].map(id => (
            <Row key={id} type="flex" align="middle" justify="center">
              <Col span={12}>
                <Button disabled style={comboBtnStyle} shape="round" key={'_' + id}>Anomynous Combo</Button>
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
    combos: state.lofi.combos,
    playing: state.lofi.playing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCombo: combo => dispatch(addCombo(combo)),
    removeCombo: combo => dispatch(removeCombo(combo)),
    toggleCombo: combo => dispatch(toggleCombo(combo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComboContainer);