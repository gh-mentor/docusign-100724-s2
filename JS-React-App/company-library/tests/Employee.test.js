const Employee = require('../src/Employee');

/*
Test case 1:
Create an Employee object with the ID 1, name 'John Doe', and salary 50000. Verify that an error is thrown when trying to instantiate an Employee object directly
*/
test('Employee cannot be instantiated directly', () => {
    expect(() => new Employee(1, 'John Doe', 50000)).toThrow(TypeError);
});