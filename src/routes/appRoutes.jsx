import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/register';
import Contact from '../pages/contact/Contact';
import AboutUs from '../pages/aboutUs/aboutUs';
import Login from '..//pages/login/login';
import AdminProduct from '../pages/adminProduct/adminProduct';
import AdminUser from '../pages/adminUser/adminUser';
import AdminRoute from './guard/adminRoute/adminRoute';
import ProductDetail from '../pages/productDetail/productDetail'

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/register" element={<Register />} />
			<Route path="/about-us" element={<AboutUs />} />
			<Route path="/product-detail/:id" element={<ProductDetail/>}/>
			<Route path="/login" element={<Login/>}/>

			<Route
				path="/admin-product"
				element={
					<AdminRoute>
						{' '}
						<AdminProduct />{' '}
					</AdminRoute>
				}
			/>
			<Route
				path="/admin-user"
				element={
					<AdminRoute>
						{' '}
						<AdminUser />{' '}
					</AdminRoute>
				}
			/>
            <Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}