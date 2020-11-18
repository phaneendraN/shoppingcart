import React from 'react';
import { ListGroup, ListGroupItem, Button, Col, Row } from 'reactstrap';

const Cart = ({ cartItem, removeItem, buyNow }) => {
	let amount = 0;

	cartItem.forEach((element) => {
		amount = parseFloat(amount) + parseFloat(element.productPrice);
	});

	return (
		<div className="">
			<h1 className="text-success">Your Cart</h1>

			<ListGroup>
				{cartItem.map((item) => (
					<ListGroupItem key={item.id}>
						<Row>
							<Col>
								<img height={80} src={item.tinyImage} />
							</Col>
							<Col className="text-center">
								<div className="text-primary">{item.productName}</div>
								<span>price :- {item.productPrice}</span>
								<Button color="danger" onClick={() => removeItem(item)}>
									Remove
								</Button>
							</Col>
						</Row>
					</ListGroupItem>
				))}
			</ListGroup>

			{/* {cartItem.map((x) => {
				<div key={x.id} className="list-group-item">
					<div className="row">
						<div className="col-4">
							<img height={80} src={x.tinyImage} />
						</div>
						<div className="col-8" />
					</div>
				</div>;
			})} */}

			{cartItem.length > 0 ? (
				<div className="card">
					<div className="card-header">
						<div className="card-title">
							<h4>Grand Total</h4>
						</div>
					</div>
					<div className="card-body">
						<p>
							Your amount for {cartItem.length} product is {amount}
						</p>
						<button onClick={buyNow} className="btn btn-success">
							pay here
						</button>
					</div>
				</div>
			) : (
				<div className="card">
					<div className="card-body">Cart Is Empty</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
