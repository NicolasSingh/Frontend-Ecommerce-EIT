import { Cart } from '../../components/cart/Cart';
import Layout from '../../layout/layout';
import './aboutUs.css';

export default function AboutUs() {
	return (
		<Layout>
			<Cart />
			<section className="about-section">
				<h1 className="aboutUs-title"><span>N & S Company</span></h1>
				<p className="aboutUs-p">
					Mi nombre es <strong>Nicolas Singh</strong> Desarrollador Full Stack Engineer.
				</p>

				<p className="aboutUs-p">
					Hace mas de un año me aventure en este camino tan especial de la programacion y el desarrollo web
				</p>

				<p className="aboutUs-p">
					En este tiempo logre adquirir experiencia y sobre todo habilidades para brindarte el mejor servicio que encontraras en el mercado
				</p>

				<p className="aboutUs-p">
					<strong>Lenguajes Frontend: HTML & CSS, JavaScript, React.</strong>
				</p>

				<p className="aboutUs-p">
					<strong>Backend: NodeJS, MongoDB,Express, entre otros.</strong>
				</p> 
			</section>
			<section className="achievements-section">
				<h2>Experiencia en:</h2>
				<ul>
					<li>Diseño Web</li>
					<li>Web-Hosting</li>
					<li>Reparaciones de PC</li>
					<li>Desarrollo de aplicaciones Mobile</li>
				</ul>
			</section>
		</Layout>
	);
}