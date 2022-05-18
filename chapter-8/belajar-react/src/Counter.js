import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  }

  handleOnClick = () => {
    const { count } = this.state; // 0 | 1
    this.setState({ count: count + 1 }) // 1 | 2
  }

  nomer = 0;

  handleWithoutState = () => {
    console.log('ini adalah data nomer awal: ', this.nomer);

    this.nomer = this.nomer + 1;

    console.log('ini adalah data nomer: ', this.nomer);
  }

  render() {
    return (
      <>
        <p>Total Count {this.state.count}</p>
        <button onClick={this.handleOnClick}>Tambah Count</button>

        <br></br>

        <p>Total Nomor {this.nomer}</p>
        <button onClick={this.handleWithoutState}>Tambah Nomer</button>
      </>
    )
  }
};

export default Counter;
