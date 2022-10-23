const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('scooter has the type of Object', () => {
    // edit this to be a real test!
    const scooter1 = new Scooter ("Boston", "Jimmy")

    expect(typeof(scooter1)).toEqual("object");
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  test("rent method false", () => {
    const scooter1 = new Scooter ("Boston", "Jimmy")
    scooter1.charge = 25
    scooter1.rent()
    expect(scooter1.docked).toBe(false)
  })

  test("rent method", () => {
    const scooter1 = new Scooter ("Boston", "Jimmy")
    let err = false
    scooter1.charge = 19
    try{
      scooter1.rent()
    }catch{
      err = true
    }
    expect(err).toBe(true)
    expect(scooter1.docked).toBe(true)
  })

  
  //dock method
  test("dock method", () => {

    const scooter1 = new Scooter ("Boston", "Jimmy")

    scooter1.dock("Boston")

    expect(scooter1.station).toBe("Boston")
    expect(scooter1.docked).toBe(true)
    expect(scooter1.user).toBe("")

  })

  //requestRepair method
  test("requestRepair method", () => {
    const scooter1 = new Scooter ("Boston", "Jimmy")

    scooter1.isBroken = true

    scooter1.requestRepair()

    setInterval(() => {expect(scooter1.isBroken).toBe(true)}, 1000)
    setInterval(() => {expect(scooter1.isBroken).toBe(false)}, 3000)

  })

  //charge method
  test("charge method", ()=> {

    const scooter1 = new Scooter ("Boston", "Jimmy")

    scooter1.recharge()
   
    expect( scooter1.charge).toBe(100)
  })
})
