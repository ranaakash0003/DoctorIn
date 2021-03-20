import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDoctors } from '../../../utils/api'
import DayPicker from 'react-day-picker'
import moment from 'moment'
import Modal from '../../components/modal'
import InfoFOrm from '../../components/infor-form'
import './booking.scss'
import 'react-day-picker/lib/style.css'

const weekDays = {
	'sunday': 0,
	'monday': 1,
	'tuesday': 2,
	'wednesday': 3,
	'thursday': 4,
	'friday': 5,
	'saturday': 6
}

const Booking = () => {
	let { id } = useParams()
	const [doctor, setDoctor] = useState({})
	const [isFetching, setIsFetching] = useState(false)
	const [booking, setBooking] = useState(false)
	const [bookingDay, setBookingDay] = useState()
	const [timeSlots, setTimeSlots] = useState([])
	const [showModal, setShowModal] = useState(false)
	const slot = {}

	const handleModal = () => {
		setShowModal(!showModal)
	}

	useEffect(() => {
		setIsFetching(true)
		fetchDoctors().then((response) => {
			let doctorDetails = response.find((d) => d.id == id)
			setDoctor(doctorDetails? doctorDetails : {} )
		}).finally(() => setIsFetching(false))
	}, [])

	const getAvailableWeekDays = () => {
		let { availibility } = doctor
		if(!availibility) return []
		const days = Object.keys(availibility)
		const times = Object.values(availibility)
		return days
	}
	
	const getWeek = () => {
		const result = {}
		let days = getAvailableWeekDays()
		days.forEach(dayName => {
			result[dayName] = (day) =>{
				return day.getDay() === weekDays[dayName]
			}
		})
		return result
	}

	const getSelectedDayStyle = () => {
		let days = getAvailableWeekDays()
		const style = {
			outside: {
				backgroundColor: 'white'
			}
		}
		days.forEach(day => {
			style[day] = {
				color: '#2ecc71',
				backgroundColor: '#e8fff1'
			}
		})
		return style
	}

	const handleDayClick = (e) => {
		const selected = moment(e).format('dddd').toLowerCase()
		let result = selected in getSelectedDayStyle()
		setBooking(result)
		setBookingDay(selected)
	}

	if(booking){
		let { availibility } = doctor
		slot[bookingDay] = availibility[bookingDay]
	}

	const  timeValues = Object.values(slot)

	let allTimes = []
	
	const genaRateSlots = (start, end) => {
		let startTime = moment(start, 'HH:mm a')
		let endTime = moment(end, 'HH:mm a')
		
		while (startTime < endTime) {
			allTimes = [...allTimes, startTime.format('HH:mm')]
			startTime.add(15, 'minutes')
		}
	}

	if(timeValues[0] != undefined){
		let startTime = timeValues[0].substring(0, 9)
		let endTime = timeValues[0].substring(11, 20)
		genaRateSlots(startTime, endTime)
	}

	return (
		<div className='booking-container'>
			<div>
				{!isFetching && doctor ? 	
					<DayPicker
						disabledDays={new Date()}
						modifiers={{ ...getWeek() }}
						modifiersStyles={{ ...getSelectedDayStyle() }}
						onDayClick={handleDayClick}
					/> : 'loading'
				}
			</div>
			{ booking ?
				<h3>available slots of {doctor.name}</h3>:
				<h3>Please select from above active dates</h3>
			}
			<div className='time-slot-container'>
				{allTimes?.map((time) => (
					<div className='slot-card' key={time}>
						<span>{bookingDay}</span>
						<h5>{time}</h5>
						<button onClick={handleModal}>Book</button>
					</div>	
				))}
			</div>
			<Modal 
				show={showModal}
				handleClose={handleModal}>
				<InfoFOrm/>
			</Modal>
		</div>
	)
}

export default Booking
