import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Page', () => {
  it('shows the dashboard hero copy', () => {
    render(<Page />);
    expect(screen.getByRole('heading', { name: /test readiness dashboard/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Curate high-impact scenarios, map the coverage you already have/i)
    ).toBeInTheDocument();
  });

  it('renders scenario toggle buttons', () => {
    render(<Page />);
    const toggles = screen.getAllByRole('button', { name: /covered|needs coverage/i });
    expect(toggles).toHaveLength(3);
  });
});
