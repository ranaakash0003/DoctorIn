import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Routes } from '../../../constants/routes'

import {  AiOutlineUser as User } from 'react-icons/ai'
import './navbar.scss'


const navItems = [
	{ 
		label: 'Home',
		path: Routes.HOME_PAGE() 
	}
]



const Navbar = () => {
	const { pathname } = useLocation()
	return (
		<nav className='nav-container'>
			<div className='nav-item'>
				<h5>DOCTORIN</h5>
				<ol>
					{navItems.map((item) => {
						return (
							<li key = {item.path}>
								<Link 
									className={pathname === item.path ? 'active' : ''} 
									to={item.path}>{item.label}
								</Link>
							</li>
						)
					})}
				</ol>
			</div>

			<div className='nav-item profile-item'>
				<User color = 'black'
					className ='user-icon' 
					size={20}
				/>
 
			</div>
		</nav>
	)
}

export default Navbar
