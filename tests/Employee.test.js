let classes = require("../lib/classes.js");

test('employee class working correctly', () => {
    const stacy = new Employee("stacy", 456, "stacy@gmail.com")
    expect(stacy.name).toEqual("stacy")
});