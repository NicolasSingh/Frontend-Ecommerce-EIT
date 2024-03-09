import Banner from '../../components/banner/banner';
import { Cart } from '../../components/cart/Cart';
import { Features } from '../../components/feature/feature';
import { ProductCardsContainer } from '../../components/productCardsContainer/productCardsContainer';


import Layout from '../../layout/layout';
import './Home.css'



export default function Home() {
	return (
		<Layout>
			<Banner />
			<Cart/>
			<div className="main-container">
				<ProductCardsContainer />
				<Features/>
			</div>
    
		</Layout>
	);
}