const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe("ScooterApp tests", () => {

// register user
test("register user", () => {
    const user1 = new User("Nick", "1234", 23)
    const app = new ScooterApp()
    app.register(user1)
    expect(typeof(app.registeredUsers[0])).toBe("object")
})

// log in



// add scooter
test("addScooter Method", () => {
    const app = new ScooterApp()
    const scooter1 = new Scooter("Boston", "Mary")

    app.addScooter("Boston", scooter1)

    expect(scooter1.station).toBe("Boston")
})

test("addScooter Method", () => {
    const app = new ScooterApp()
    const scooter1 = new Scooter("Boston", "Mary")

    app.addScooter("Boston", scooter1)

    expect(Object.keys(app.stations).includes("Boston")).toBe(true)
})

// remove scooter


})
