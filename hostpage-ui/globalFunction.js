window.myGlobalData = {};

window.myGlobalData.vehicles = {
  count: 0,
  addVehicle: () => {
    console.log("add vehicle Function..");
    window.myGlobalData.vehicles.count++;
    console.log(" window.myGlobalData.count", window.myGlobalData.count);
    window.dispatchEvent(new Event("countRaised"));
  },
};

window.myGlobalData.vehicleData = {
  vehicleSelected: 0,
  changeVehicle: (vehicle) => {
    console.log("vehicle Function");
    window.myGlobalData.vehicleData.vehicleSelected = vehicle;
    window.dispatchEvent(new Event("vehicleChange"));
  },
};
