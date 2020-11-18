import React from 'react';

const CartItem = ({ Product, addInCart, id }) => {
	return (
		<div className="card card-default mb-3">
			<div className="card-header  p-0">
				<img height="250" width="100%" alt="" className="img-resposnive" src={Product.smallImage} />
			</div>
			<div className="card-body">
				<div className="card-title">
					<h4>{Product.productName}</h4>
				</div>
				<div className="card-text">Price: {Product.productPrice}</div>
				<button type="button" onClick={() => addInCart(Product)} className="btn btn-success mt-2">
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default CartItem;
