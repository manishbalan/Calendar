import { render, screen } from '@testing-library/react';
import Caledar from './';

test('renders calendar component', () => {
  render(<Caledar date="2023-10-12"/>);
  expect(screen.getByText(`October 2023`)).toBeInTheDocument();
});
