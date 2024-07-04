import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe } from 'vitest';
import PostList from '../components/PostList';
import { render } from './test-utils';

describe('PostList component', () => {
  const mockPosts = [
    { id: 1, title: 'Post 1', body: 'Body 1', userId: 1 },
    { id: 2, title: 'Post 2', body: 'Body 2', userId: 1 },
    { id: 3, title: 'Post 3', body: 'Body 3', userId: 1 },
    { id: 4, title: 'Post 4', body: 'Body 4', userId: 1 },
  ];

  test('should render correctly', () => {
    const { asFragment } = render(<PostList filteredPosts={mockPosts} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders posts correctly', () => {
    render(<PostList filteredPosts={mockPosts} />);
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
    expect(screen.getByText('Post 3')).toBeInTheDocument();
  });

  test('paginates posts correctly', () => {
    render(<PostList filteredPosts={mockPosts} />);
    fireEvent.click(screen.getByText('Next'));

    expect(screen.queryByText('Post 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Post 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Post 3')).not.toBeInTheDocument();
    expect(screen.getByText('Post 4')).toBeInTheDocument();
  });

  test('disables previous button on first page', () => {
    render(<PostList filteredPosts={mockPosts} />);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  test('disables next button on last page', () => {
    render(<PostList filteredPosts={mockPosts} />);
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Next')).toBeDisabled();
  });
});
