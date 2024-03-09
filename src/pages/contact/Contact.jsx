

import { Cart } from "../../components/cart/Cart";
import Layout from "../../layout/layout";
import './Contact.css'

export default function contact() {
	return (
		<Layout>
			<Cart/>
			<main className=" main-contact">
				<section className="section-contact">
					<div className="contact-form-container">
						<div className="contact-wrapper">
							<h1 className="contact-title">FORMULARIO DE CONTACTO</h1>
							<form className="form contact-form">
								<div className="input-wrapper">
									<label htmlFor="fullname">Nombre Completo</label>
									<input
										type="text"
										name="fullname"
										id="fullname"
										required
										minLength="5"
										maxLength="80"
									/>
								</div>

								<div className="input-wrapper">
									<label htmlFor="email">Correo Electronico</label>
									<input
										type="email"
										name="email"
										id="email"
										pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
										required
										minLength="5"
										maxLength="80"
									/>
								</div>

								<div className="input-wrapper">
									<label htmlFor="message">Mensaje</label>
									<textarea
										name="message"
										id="message"
										rows="4"
										required
										minLength="10"
										maxLength="400"
									></textarea>
								</div>

								<div className="input-wrapper">
									<button type="submit">Enviar</button>
								</div>
							</form>
						</div>
					</div>

					<div className="contact-map">
						<iframe 
							title="Mapa Google"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.172508148821!2d-65.42079612462531!3d-24.789545807859888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b047347fb9%3A0xa408c1eb45093739!2sCaseros%201117%2C%20A4400%20Salta!5e0!3m2!1ses!2sar!4v1693268188517!5m2!1ses!2sar"
							width="100%"
							height="100%" 
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</section>
			</main>
		</Layout>

	)
}