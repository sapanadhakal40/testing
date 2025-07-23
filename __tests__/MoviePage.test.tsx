
import { render, screen, fireEvent } from '@testing-library/react';
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
		 expect(screen.getByText('Amazing movie!')).toBeInTheDocument();
		 expect(screen.getByText('Mind-blowing!')).toBeInTheDocument();
     expect(screen.getByRole('textbox')).toBeInTheDocument();
     expect(screen.getByRole('button')).toBeInTheDocument();
     expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Write your review...');
     expect(screen.getByText('⭐ 4.8 / 5')).toBeInTheDocument();
     
	});


	it('allows adding a new review', () => {
		render(<MoviePage />);

  const expectedReview = 'Great movie from Tom!';

  //get review input and submit button
		const textarea = screen.getByPlaceholderText('Write your review...');
		const submitButton = screen.getByText('Submit');
  
		// Simulate user input(typing a review)
      fireEvent.change(textarea, {
      target: { value: "Great movie from Tom!" },
    });
		// Simulate form submission
		fireEvent.click(submitButton);

    //check if new review is displayed as a list item
    const newReview = screen.getAllByText(expectedReview);
    const isListItem = newReview.some((item) => item.tagName === 'LI');
	  // expect(newReview.tagName).toBe('LI');
		expect(isListItem).toBeTruthy();
	});
	});