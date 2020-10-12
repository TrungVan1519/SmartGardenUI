import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { isNotEmpty, isNumber } from "./../utils/validate";
import HalfDoughnut from "./common/HalfDoughnut";
import CustomButton from "./common/customButton";
import config from "../services/config.json";
import fakeData from "../services/fakeData.json";
// import http from "../services/httpService";
import socket from "../services/socketService";
import "react-toastify/dist/ReactToastify.css";
import "./css/main.css";

class Main extends Component {
  state = {
    halfDoughnuts: [
      {
        id: 2,
        title: "Độ ẩm đất",
        unit: "%",
        datasets: [
          {
            backgroundColor: ["#ffbe76"],
            hoverBackgroundColor: ["#f0932b"],
            data: [], //  format - data: [70, 30],
          },
        ],
      },
      {
        id: 3,
        title: "Độ ẩm không khí",
        unit: "%",
        datasets: [
          {
            backgroundColor: ["#7ed6df"],
            hoverBackgroundColor: ["#22a6b3"],
            data: [], // format - data: [50, 50],
          },
        ],
      },
      {
        id: 1,
        title: "Nhiệt độ",
        unit: "độ C",
        datasets: [
          {
            backgroundColor: ["#ff7979"],
            hoverBackgroundColor: ["#eb4d4b"],
            data: [], //  format - data: [60, 40],
          },
        ],
      },
    ],
    customButtons: [
      {
        id: 1,
        label: "Update",
        isActive: false,
      },
      {
        id: 2,
        label: "Quyền điều khiển",
        isActive: false,
      },
      {
        id: 3,
        label: "Bơm nước",
        isActive: false,
      },
    ],
  };

  handleClick = (customButton) => {
    // Button auto change to backgroundColor = green when clicked
    const customButtons = [...this.state.customButtons];
    customButtons.forEach((element) => {
      if (element === customButton) {
        element.isActive = true;
      } else {
        element.isActive = false;
      }
    });
    this.setState({ customButtons });

    // Click the update button
    if (customButton.id === 1) {
      // data = await (await http.get(config.apiEndpoint)).data;

      // Fetching data from Server by using socket
      socket.get(config.apiEndpoint, (responseData) => {
        if (!isNotEmpty(responseData)) {
          toast.error("Error: Data is empty");
          responseData = fakeData;
        }
        if (!isNumber(responseData)) {
          toast.error("Error: Data is not a number (default valid format)");
          responseData = fakeData;
        }
        const propValues = Object.values(responseData);
        const halfDoughnuts = [...this.state.halfDoughnuts];
        halfDoughnuts.forEach((element, index) => {
          element.datasets[0].data[0] = propValues[index];
          element.datasets[0].data[1] = 100 - propValues[index];
        });

        customButton.isActive = false;
        this.setState({ halfDoughnuts, customButtons });
      });
    }

    // Click the pumpWater button
    if (customButton.id === 3) {
      socket.pumpWater(config.apiEndpoint, (responseData) => {
        customButtons.forEach((element) => (element.isActive = false));
        this.setState({ customButtons });
      });
    }
  };

  render() {
    const { halfDoughnuts, customButtons } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-12 my-3">
              <h1>Smart Garden</h1>
            </div>
            <div className="col-12 container__data">
              <div className="row">
                {halfDoughnuts.map((halfDoughnut) => (
                  <div
                    id={`custom-div-${halfDoughnut.id}`}
                    className="col-4"
                    key={halfDoughnut.id}
                  >
                    <HalfDoughnut halfDoughnut={halfDoughnut} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 container__button">
              <div className="row">
                {customButtons.map((customButton) => (
                  <div
                    id={`custom-div-${customButton.id}`}
                    className="col-4"
                    key={customButton.id}
                  >
                    <CustomButton
                      id={`custom-btn-${customButton.id}`}
                      customButton={customButton}
                      onClick={this.handleClick}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
