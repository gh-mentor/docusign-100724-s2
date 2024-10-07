const Manager = require('../src/Manager');

/*
Test case 1:
Create a Manager object with the ID 1, name 'Jane Doe', salary 70000, and department 'HR'. Verify that the manager has been created successfully
*/
test('Manager can be instantiated and getDetails works', () => {
    const manager = new Manager(1, 'Jane Doe', 70000, 'HR');
    expect(manager.getDetails()).toBe('Employee ID: 1, Jane Doe earns 70000 and manages the HR department');
});