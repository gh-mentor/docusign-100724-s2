import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

/*
Test case 1:
Render the Counter component and verify that the initial count is 0
*/
test('initial count is 0', () => {
  const { getByText } = render(<Counter />);
  const count = getByText(/count:/i);
  expect(count).toHaveTextContent('Count: 0');
});
