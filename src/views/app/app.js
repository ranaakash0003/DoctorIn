import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Routes } from '../../constants/routes'
import HomePage from '../pages/home'
import BookingPage from '../pages/booking'
import Navbar from '../components/navbar/'
import Footer from '../components/footer'
import './app.scss'

const App = () => {
	return (
		<main>
			<Navbar/>
			<Switch>
				<Route exact path={Routes.HOME_PAGE()} component={HomePage}/>
				<Route exact path={'/:id/booking'} component={BookingPage}/>
			</Switch>
			<Footer/>
		</main>
	)
}

export default App
