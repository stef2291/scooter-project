class Scooter {
  constructor(station, user) {
    this.station = station;
    this.user = user;
    this.serial = Math.round(Math.random() * 1000);
    this.charge = Math.round(Math.random() * 100);
    this.isBroken = false;
    this.docked = true;
  }

  rent() {
    if (!this.isBroken && this.charge > 20) {
      this.docked = false;
      console.log("Enjoy The Ride!");
    } else if (!this.isBroken && this.charge <= 20) {
      throw new Error("Scooter low on battery, please charge.");
    } else {
      throw new Error("Scooter is broken, please send a repair request.");
    }
  }

  dock(station) {
    if (!station) {
      throw new Error("Docking station required!");
    }

    this.station = station;
    this.docked = true;
    this.user = "";
  }

  recharge() {
    this.charge = 100;
  }

  requestRepair() {
    setInterval(() => {
      console.log("Scooter Has Been Repaired");
      this.isBroken = false;
    }, 2000);
  }
}

module.exports = Scooter;
