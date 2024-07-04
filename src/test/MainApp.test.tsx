import MainApp from '../pages/MainApp';
import { render } from './test-utils';

describe('MainApp pages', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<MainApp />);
    expect(asFragment()).toMatchSnapshot();
  });
});
