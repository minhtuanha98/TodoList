import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './components/Form';
import Item from './components/Item';
import { connect } from 'react-redux';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = () => {
    let { List } = this.props;
    console.log(List);
    return List.map((item, index) => {
      return <Item 
              key={index} 
              index={index} 
              item={item} 
              />;
    });
  };
  render() {
    return (
      <div style={{ marginLeft: '15px' }}>
        <h1 style ={{textAlign:'center'}}>Timestamped Notes App</h1>
        <Form />
        <hr style={{border:'1px solid black'}} />
        <div>{this.renderItem()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    List: state.reverse()
  };
};

export default connect(mapStateToProps)(App);
