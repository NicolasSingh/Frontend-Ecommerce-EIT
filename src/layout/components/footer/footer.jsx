// import logo from '../../assets/images/logos/LOGO.png'


import './footer.css';

export default function Footer() {
	return (
		<>
			<footer className="main-footer">
				<section className="footer-section1">
					<div>
						<p className='direccion'>Salta Capital</p>
						<p>Caseros 1117
						(Salta Capital)</p>
						<p className="direccion"> Tel: 03888-550263 </p>
					</div>
				</section>
				<section className="footer-section2">
					<div>
						<img
							className="footer-logo"
							srcSet='/src/assets/image/LOGO.png'
							alt="Footer Logo"
						/>
					</div>
				</section>
				<section className="footer-section3">
					<div>
						<a className="footer-link" href="">
							<img
								className="logo-IG"
								srcSet="/src/assets/image/FOTO-IG-TRANSPARENTE.png"
								alt="logo-insta"
							/>
							Instagram
						</a>
					</div>
					<div>
						<a className="footer-link" href="">
							<img
								className="logo-YT"
								srcSet="/src/assets/image/FOTO-YT-LOGO.png"
								alt="logo-youtube"
							/>{' '}
							Youtube
						</a>
					</div>
					<div>
						<a className="footer-link" href="">
							<img
								className="logo-FB"
								srcSet="/src/assets/image/Logo-FB.png"
								alt="logo-fb"
							/>
							Facebook
						</a>
					</div>
				</section>
			</footer>
		</>
	);
}