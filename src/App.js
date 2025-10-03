import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './components/Redux/cart';
import Notification from './components/UI/Notification';
function App() {
	const isShow = useSelector((state) => state.cart.cartToggle);
	const cartItems = useSelector((state) => state.cart.carts);
	const notification = useSelector((state) => state.cart.notification);
	const dispatch = useDispatch((state) => state.carte)
	useEffect(() => {
		const sendCartData = async () => {
			dispatch(cartActions.showNotification({
				message: "Pending...",
				type: "pending"
			}))
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

				dispatch(cartActions.showNotification({
					message: "Successfully sent",
					type: "success"
				}))
			} catch (error) {
				console.error(error);
				dispatch(cartActions.showNotification({
					message: "Something went wrong!",
					type: "error"
				}))
			}

			setTimeout(() => {
				dispatch(cartActions.clearNotification());
			}, 3000);
		};

		if (cartItems.length > 0) {
			sendCartData();
		}
	}, [cartItems, dispatch]);


	return (
		<Layout>
			{notification && (
				<Notification
					status={notification.type}
					message={notification.message}
				/>
			)}
			{isShow && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
