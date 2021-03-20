import React from 'react'
import './footer.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container footer-container'>
				<div className='footer-bottom'>
					<ul className='logo'>
						<li>Showtime</li>
					</ul>
					<ul className='links'>
						<li>@ {new Date().getFullYear()} All right reserved</li>
					</ul>
					<ul className='links'>
						<li>Audio Description</li>
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
