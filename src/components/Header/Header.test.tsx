import { render, screen } from '@testing-library/react';
import Header from './Header';

it('test_header_renders_without_errors', () => {
  const { container } = render(<Header />);
  expect(container).toBeInTheDocument();
});

it('test_header_title_displayed', () => {
  render(<Header />);
  expect(screen.getByText('HACKER NEWS')).toBeInTheDocument();
});
