import React from 'react'
import './footer.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<div className='footer-bottom'>
					<ul className='logo'>
						<li>Doctorin</li>
					</ul>
					<ul className='links'>
						<li>@ {new Date().getFullYear()} All right reserved</li>
					</ul>
					<ul className='links'>
						<li>About Us</li>
						<li>Privacy Policy</li>
						<li>Terms Of Use</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

Footer.propTypes = {}

export default Footer
