import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      detail: ''
    };
  }
  onchangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmitForm = () => {
    this.props.addItems(this.state.title, this.state.detail);
    this.setState({
      title: '',
      detail: ''
    });
  };
  render() {
    return (
      <div>
        <form className="text-center">
          <div
            className="form-group col-xs-5 col-sm-5 col-md-5 col-lg-5 text-center"
            style={{ marginLeft:'365px' }}
          >
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.onchangeInput}
               placeholder="Note Title"
              required
            />
          </div>
          <div
            className="form-group col-xs-5 col-sm-5 col-md-5 col-lg-5"
            style={{ marginLeft: '365px' }}
          >
            <textarea
              type="text"
              className="form-control"
              name="detail"
              value={this.state.detail}
              onChange={this.onchangeInput}
              placeholder="Note Details"
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-warning "
            style={{ fontSize: '20px' }}
            onClick={this.onSubmitForm}  
            disabled={
              this.state.title.length > 0 && this.state.detail.length > 0 ? false : true
            }
          >
            Add Note
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItems: (title, detail) => dispatch(addItem(title, detail))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Form);
