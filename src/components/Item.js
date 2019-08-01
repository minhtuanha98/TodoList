import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  handlingDate = current_datetime => {
    return (
      current_datetime.getFullYear() +
      '-' +
      (current_datetime.getMonth() + 1) +
      '-' +
      current_datetime.getDate() +
      ' ' +
      current_datetime.getHours() +
      ':' +
      current_datetime.getMinutes() +
      ':' +
      current_datetime.getSeconds()
    );
  };
  handlingDelete = () => {
    if (window.confirm('Bạn có muốn xóa không ?')) {
      this.props.handleDelete(this.props.index);
    }
  };
  handleShowDetail = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };
  render() {
    var container = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: '40px',
      paddingRight: '40px'
    };
    var main = {
      padding: '15px',
      margin: '16px',
      border: '1px solid black',
      backgroundColor: '#FFF8DC'
    };
    const { item, index } = this.props;
    console.log(item);
    return (
      <div style={main}>
        <div style={container}>
          <h2 style={{ marginTop: '12px' }}>{item.title}</h2>
          <div>
            <div>Recorded: {this.handlingDate(item.date)}</div>
            <div>
              <button
                type="button"
                className="btn btn-outline-success "
                onClick={this.handleShowDetail}
              >
                {this.state.showForm ? 'Hide Details' : 'Show Details'}
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                style={{ marginLeft: '15px' }}
                onClick={this.handlingDelete}
              >
                Remove Note
              </button>
            </div>
          </div>
        </div>
        {this.state.showForm ? (
          <div>
            <hr />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                paddingLeft: '15px'
              }}
            >
              <b>Details: </b> {item.detail}
            </div>
          </div>
        ) : ( '')}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleDelete: index => dispatch(deleteItem(index))
  };
};
export default connect(null,
  mapDispatchToProps
)(Item);
