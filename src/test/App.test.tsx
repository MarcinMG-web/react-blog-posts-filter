import { expect, test } from 'vitest';
import App from '../App';
import { render } from './test-utils';

describe('App', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
