import React, { useState, useEffect } from 'react';
import './App.css';
import BuyPage from './components/buyPage';
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';

function App() {
	const [ cartItem, setCartItem ] = useState([]);

	const addItem = (item) => {
    
    // const isadded = cartItem.findIndex((array) => {
		// 	return (array.id = item.id);
    // });
    
    const isadded = cartItem.filter(x=>x.id == item.id).length > 0;

		if (isadded) {
			toast('Already added in cart', {
				type: 'error'
      });
    } else{
      setCartItem([...cartItem, item]);
    }
	};

	const buyNow = () => {
		setCartItem([]);

		toast('Purchase completed', {
			type: 'success'
		});
	};

	const removeItem = (item) => {
		setCartItem(cartItem.filter((x) => x.id != item.id));
  };
  
  useEffect(() => {
    setCartItem([]);
  }, []);

	return (
		<div className="App">
      <ToastContainer />
			<div style={{marginLeft:0,marginRight:0}} className="row">
				<div className="col-8 col-md-8">
					<BuyPage addInCart={addItem} />
				</div>
				<div className="col-4 col-md-4">
            <Cart removeItem={removeItem} buyNow={buyNow} cartItem={cartItem} />
        </div>
			</div>
		</div>
	);
}

export default App;
