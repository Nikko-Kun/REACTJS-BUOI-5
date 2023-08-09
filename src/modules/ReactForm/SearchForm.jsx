import React, { Component } from "react";
import { connect } from "react-redux";
import { timSinhVienCreator } from "../../redux/ReactForm/FormQLSV.action";

class Search extends Component {
  render() {
    return (
      <div className="d-flex justify-content-start">
        <input
          onChange={(event) => {
            this.props.dispatch(timSinhVienCreator(event.target.value));
          }}
          className="form-control w-25"
          placeholder="Nhập tên sinh viên cần tìm"
          value={this.props.valueSearch}
          type="text"
        />
        {/* <button
          onClick={() => {
            this.props.dispatch(timSinhVienCreator(""));
          }}
          className="btn btn-primary mx-2"
        >
          Xoá
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    valueSearch: state.quanLySinhVienReducer.valueSearch,
  };
};

export default connect(mapStateToProps, null)(Search);
