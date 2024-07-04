import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { describe } from 'vitest';
import { render } from './test-utils';
import AuthorFilter from '../components/AuthorFilter';

describe('AuthorFilter component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<AuthorFilter />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders posts correctly', () => {
    render(<AuthorFilter />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const allAuthorsOptions = screen.getAllByText('All Authors');
    expect(allAuthorsOptions.length).toBe(2);
  });
});
