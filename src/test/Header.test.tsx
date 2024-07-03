import '@testing-library/jest-dom';

import { describe } from 'vitest';
import { render } from './test-utils';
import Header from '../ui/Header';

describe('Header', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
