import MovieCard from ".";
import { render, screen } from '@testing-library/react';

describe('MovieCard', () => {
  it('renders movie title and rating', () => {
  render(
			<MovieCard title="Inception" rating={4.8} imageUrl="/inception.jpg" />
		);
//debugging the rendered output
// screen.debug();
	 	expect(screen.getByText('Inception')).toBeInTheDocument();
		expect(screen.getByText('⭐ 4.8 / 5')).toBeInTheDocument();

  });
});