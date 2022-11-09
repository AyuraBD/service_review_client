import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
	const { img, name, about, price } = useLoaderData();
	return (
		<div className='container py-5'>
			<div className="row">
				<div className="col-lg-8 offset-md-2">
					<div className="details-cnt mb-5">
						<div className="col-md-8 offset-md-2">
							<PhotoProvider>
								<PhotoView src={img}>
									<img className='img-fluid mb-3' src={img} alt={name} />
								</PhotoView>
							</PhotoProvider>
						</div>
						<div className="details-heading">
							<h2>{name}</h2>
							<p className='text-warning fw-bold'>{price}</p>
						</div>
						<div className="desciption">
							<p>{about}</p>
						</div>
					</div>
					<div className="review mt-3">
						<h5 className='mb-3'>Post a review on the service</h5>
						<Form>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Your Name</Form.Label>
								<Form.Control type="text" name="name" placeholder="Your Name" />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="text" placeholder="Your Image URL" />
							</Form.Group>
							<FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Write your Comments here">
								<Form.Control
									as="textarea"
									placeholder="Leave a comment here"
									style={{ height: '120px' }}
								/>
							</FloatingLabel>
							<Button variant="primary" type="submit">
								Post your review
							</Button>
						</Form>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Details;