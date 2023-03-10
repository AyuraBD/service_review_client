import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewRow from './ReviewRow';


const Reviews = () => {
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);
	console.log(reviews);
	useTitle('Reviews');

	useEffect(() => {
		fetch(`https://cleaning-service-server.vercel.app/reviews/`)
			.then(res => res.json())
			.then(data => {
				setReviews(data);
			})
	}, [])
	const deleteReview = id => {
		const proceed = window.confirm("Are you sure to delete the review?");
		if (proceed) {
			fetch(`https://cleaning-service-server.vercel.app/reviews/${id}`, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(data => {
					if (data.deletedCount > 0) {
						alert('Review deleted successfully');
						const remaining = reviews.filter(review => review._id !== id);
						setReviews(remaining);
					}
				})
		}
	}
	//Update review
	const handleUpdate = id =>{
		fetch(`https://cleaning-service-server.vercel.app/reviews/${id}`,{
			method: 'PATCH',
			headers: {
				'content-type' : 'application/json'
			},
			// body: JSON.stringify();
		})
	}
	return (
		<div className='container my-5' style={{ paddingTop: '60px', paddingBottom: '60px', }}>
			<div className="row">
				<h2 className='mb-5'>You have {reviews.length} reviews</h2>
				<div className="reviews">
					{
						reviews.map(review => <ReviewRow
							key={review._id}
							review={review}
							deleteReview={deleteReview}
							handleUpdate={handleUpdate}
						></ReviewRow>)
					}
				</div>
			</div>
		</div>
	);
};

export default Reviews;