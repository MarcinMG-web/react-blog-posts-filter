import { expect, test } from 'vitest';

import { render } from '@testing-library/react';

export function sum(a: number, b: number) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('should render correctly', () => {
  const { asFragment } = render(<div>'test'</div>);

  expect(asFragment()).toMatchSnapshot();
});
