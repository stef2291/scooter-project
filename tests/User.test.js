const User = require('../src/User')

// User tests here
describe("user object", () => {
// test username
test("username", () => {
    const user1 = new User("Mark123", "1234", 23)

    expect(user1.username).toBe("Mark123")
})

// test password
test("username", () => {
    const user1 = new User("Mark123", "1234", 23)

    expect(user1.password).toBe("1234")
})


// test age
test("username", () => {
    const user1 = new User("Mark123", "1234", 23)

    expect(user1.age).toBe(23)
})
})
