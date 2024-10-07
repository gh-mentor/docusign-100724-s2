const Developer = require('../src/Developer');

/*
Test case 1:
Create a Developer object with the ID 1, name 'John Smith', salary 60000, and programming language 'JavaScript'. Verify that the developer has been created successfully
*/
test('Developer can be instantiated and getDetails works', () => {
    const developer = new Developer(1, 'John Smith', 60000, 'JavaScript');
    expect(developer.getDetails()).toBe('Employee ID: 1, John Smith earns 60000 and codes in JavaScript');
});
