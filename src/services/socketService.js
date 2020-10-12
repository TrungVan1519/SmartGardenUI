import socketIOClient from "socket.io-client";

const getSocketData = (apiEndpoint, callback) => {
  const socket = socketIOClient(apiEndpoint);

  socket.emit("getSensorsData");
  socket.once("returnSensorsData", (response) => callback(response.data));
};

const pumpWaterRequest = (apiEndpoint, callback) => {
  const socket = socketIOClient(apiEndpoint);

  socket.emit("pumpWaterRequest");
  socket.once("pumpWaterResponse", (response) => callback(response.data));
};

export default {
  get: getSocketData,
  pumpWater: pumpWaterRequest,
};
