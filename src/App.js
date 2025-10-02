import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Card from './components/UI/Card';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
function App() {
	const isShow = useSelector((state) => state.cart.cartToggle);
	const cartItems = useSelector((state) => state.cart.carts);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false)
	useEffect(() => {
		const sendCartData = async () => {
			try {
				const res = await fetch(
					"https://e-commerce-project-2-4807f-default-rtdb.firebaseio.com/carts.json",
					{
						method: "PUT",
						body: JSON.stringify(cartItems),
						headers: { "Content-Type": "application/json" },
					}
				);

				if (!res.ok) {
					throw new Error("Request failed!");
				}

				console.log("response is ok");
				setShowSuccess(true);
				setShowError(false);

				setTimeout(() => {
					setShowSuccess(false);
				}, 3000);
			} catch (error) {
				console.error(error);
				setShowError(true);
				setShowSuccess(false);

				setTimeout(() => {
					setShowError(false);
				}, 3000);
			}
		};

		if (cartItems.length > 0) {
			sendCartData();
		}
	}, [cartItems]);


	return (
		<Layout>
			{showSuccess && <Card className="success">Cart saved successfully ✅</Card>}
			{showError && <Card className="error">Something went wrong ❌</Card>}
			{isShow &&
				<Cart />
			}
			<Products />
		</Layout>
	);
}

export default App;
