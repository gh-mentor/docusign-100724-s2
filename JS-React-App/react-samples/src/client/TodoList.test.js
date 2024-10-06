import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

/*
test case 1:
Verify that the TodoList component renders correctly
*/
test('renders the TodoList component', () => {
  const { getByText } = render(<TodoList />);
  const headerElement = getByText(/todo list/i);
  expect(headerElement).toBeInTheDocument();
});

