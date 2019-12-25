import React, { Component } from "react";
import "./About.css";
import { Modal } from "antd";
import Button from "react-bootstrap/Button";
import "antd/dist/antd.css";

class About extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <h1>Who is Raymond Nwambuonwo</h1>
        <div>
          <Button className="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Ok
              </Button>
            ]}
          >
            <p>Some contents...</p>
          </Modal>
        </div>

        <div></div>

        <div></div>
      </div>
    );
  }
}

export default About;
