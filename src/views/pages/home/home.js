import React, { useState, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { FaUserMd as UserIcon } from 'react-icons/fa'
import { HiLocationMarker as LocationIcon } from 'react-icons/hi'
import { fetchDoctors } from '../../../utils/api'
import { Routes } from '../../../constants/routes'
import LOADER from '../../../assets/image/loader.gif'

import './home.scss'


const HomePage = () => {
	let history = useHistory()
	const [isFetching, setIsFetching] = useState(false)
	const [doctors, setDoctors] = useState([])

	useEffect(() => {
		setIsFetching(true)
		fetchDoctors().then((response) => {
			setDoctors(response)
		}).finally(() => setIsFetching(false))
	}, [])

	const onBookingClick = (id) => {
		history.push(Routes.BOOKING_PAGE(id))
	}
	return (
		<div className='home-container'>
			{isFetching ? (
				<div className='loading-container'>
					<img src={LOADER} alt=''/>
				</div>) : (
				<>
					{ doctors.map((user) => (
						<Fragment key={user.id}>
							<div className='card'>
								<UserIcon size={80}/>
								<div className='doctor-details'>
									<h5>{user.name}</h5>
									<p><span>{user.speciality}</span></p>
									<div className='location-item'>
										<LocationIcon size={18} color={'#b7b7ae'}/><h6>{user.org}</h6>
									</div>
								</div>
								<button onClick={() => onBookingClick(user.id)}>View</button>
							</div>
						</Fragment>
					))}
				</>

			)
			}
		</div>
	)
}

export default HomePage
