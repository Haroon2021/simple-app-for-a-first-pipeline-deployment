import { render, screen } from '@testing-library/react';
import App from './App';
import ControlledComponent from './Components/Form';

test('renders learn react link', () => {
  render(<ControlledComponent />);
  const linkElement = screen.getAllByText(/Input Value:/i)[0];
  expect(linkElement).toBeInTheDocument();
});
