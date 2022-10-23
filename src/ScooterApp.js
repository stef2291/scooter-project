const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      Manhattan: [],
      Brooklyn: [],
      Queens: [],
      Bronx: [],
      StatenIsland: [],
    };
    this.registeredUsers = [];
  }

  static scooterSessions = []; //each time the class is instanciated it should be added to the array (bonus)

  register(user) {
    if (this.registeredUsers.includes(user.username)) {
      console.log("already registered!");
      return;
    }

    if (user.age <= 17) {
      console.log("too young to register!");
      return;
    }

    const usernameKey = user.username;
    const obj = {};
    const newUser = {
      password: user.password,
      age: user.age,
      loggedIn: false,
      accountCharge: 0,
    };
    obj[usernameKey] = newUser; // Return later 🐇🐇

    this.registeredUsers.push(obj);
    console.log("user has been registered");
    console.log(this.registeredUsers);
  }

  //[{jimmy: {password: 1234, loggedIn: false,}}, {timmy: {password: 2345, loggedIn: false,}}, {bimmy:{password:3456, loggedIn: false,}}]

  logIn(username, password) {
    for (let x of this.registeredUsers) {
      let [name] = Object.keys(x);

      if (username === name) {
        let [registeredUsersValueObj] = Object.values(x);

        if (registeredUsersValueObj.password === password) {
          registeredUsersValueObj.loggedIn = true;
          console.log("User Logged In Succesfully!");
          return;
        }
      }
    }
    console.log("Username or password is incorrect.");
  }

  addScooter(location, scooter) {
    scooter.station = location;

    if(!this.stations[location])  {
      this.stations[location] = [scooter];
    }else {
      this.stations[location].push(scooter)
    }
  }

  /**
       this.stations = {
      Manhattan: [{
    this.station = station;
    this.user = user;
    this.serial = Math.round(Math.random() * 1000);
    this.charge = Math.round(Math.random() * 100);
    this.isBroken = false;
    this.docked = true;
  }],
      Brooklyn: [],
      Queens: [],
      Bronx: [],
      StatenIsland: [],
    };
    this.registeredUsers = [];
  }
   */

  removeScooter(scooterToRemove) {
    let value = scooterToRemove.serial;
    let scooterLocation = scooterToRemove.location;

   let stationsNewArr = this.stations[scooterLocation].filter(scooter => scooter.serial !== value)

   if(this.stations[scooterLocation].length === stationsNewArr.length) {
    throw Error("Scooter Not Registered")
   }else {
    this.stations[scooterLocation] = stationsNewArr
   }

    console.log(`Scooter with serial number ${value} has been removed`);
  }
}

module.exports = ScooterApp;
