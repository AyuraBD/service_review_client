import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddService = () => {

	const handleAddService = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const price = form.price.value;
		const about = form.about.value;
		const img = form.img.value;
		const service = {
			name,
			price,
			about,
			img
		}
		fetch('http://localhost:5000/services', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(service)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.acknowledged) {
					alert('Service added successfully');
					form.reset();
				}
			})
			.catch(err => console.log(err));
	}
	return (
		<div className='container py-5'>
			<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<div className="text-center heading mb-3">
						<h3>Add a Service</h3>
					</div>
					<Form onSubmit={handleAddService}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Service Name</Form.Label>
							<Form.Control type="text" name="name" placeholder="Service name" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Price</Form.Label>
							<Form.Control type="text" name="price" placeholder="Price" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Service description</Form.Label>
							<Form.Control type="text" name="about" placeholder="Service Description" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label> Service Image URL</Form.Label>
							<Form.Control type="text" name="img" placeholder="Your Image URL" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Add to Service
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default AddService;