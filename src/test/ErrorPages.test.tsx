import { screen } from '@testing-library/react';
import ErrorPages from '../pages/ErrorPages';
import { render } from './test-utils';

describe('Error pages', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<ErrorPages errorCode={400} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with 400 error code', () => {
    render(<ErrorPages errorCode={400} />);

    expect(screen.getByText('400')).toBeInTheDocument();
    expect(screen.getByText('Bad Request')).toBeInTheDocument();
    expect(screen.getByText('The server could not understand the request due to invalid syntax.')).toBeInTheDocument();
  });

  test('renders with 403 error code', () => {
    render(<ErrorPages errorCode={403} />);

    expect(screen.getByText('403')).toBeInTheDocument();
    expect(screen.getByText('Forbidden')).toBeInTheDocument();
    expect(screen.getByText('Sorry, you are not authorized to access this page.')).toBeInTheDocument();
  });

  test('renders with 404 error code', () => {
    render(<ErrorPages errorCode={404} />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Not Found')).toBeInTheDocument();
    expect(screen.getByText('Sorry, the page you visited does not exist.')).toBeInTheDocument();
  });

  test('renders with default error code (500)', () => {
    render(<ErrorPages errorCode={500} />);

    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('Internal Server Error')).toBeInTheDocument();
    expect(screen.getByText('Sorry, something went wrong.')).toBeInTheDocument();
  });
});
