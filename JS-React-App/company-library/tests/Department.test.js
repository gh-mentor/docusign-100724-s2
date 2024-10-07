const Department = require('../src/Department');
const Developer = require('../src/Developer');

/*
Test case 1:
Create a Department object with the ID 1 and the name 'Engineering' and verify that the department has been created successfully
*/
test('Department can be created successfully', () => {
    const department = new Department(1, 'Engineering');
    expect(department.name).toBe('Engineering');
    expect(department.id).toBe(1);
    expect(department.employees).toEqual([]);
}); 