
import { render, screen } from '@testing-library/react';
import MoviePage from '@/app/movies/[id]/page';

// Mock the useParams hook from Next.js
jest.mock('next/navigation', () => ({
	useParams: () => ({
		id: 'inception'
	})
}));

describe('MoviePage', () => {
	it('renders movie title and review', () => {
	render(
			<MoviePage/>
		);
		//debugging the rendered output
		screen.debug();
     expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Inception');
		//  expect(screen.getByText('Inception')).toBeInTheDocument();
     expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Reviews');
		//  expect(screen.getByText('⭐ 4.8 / 5')).toBeInTheDocument();
		 expect(screen.getByText('Amazing movie!')).toBeInTheDocument();
		 expect(screen.getByText('Mind-blowing!')).toBeInTheDocument();
     expect(screen.getByRole('textbox')).toBeInTheDocument();
     expect(screen.getByRole('button')).toBeInTheDocument();
     expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Write your review...');
     
	});
});