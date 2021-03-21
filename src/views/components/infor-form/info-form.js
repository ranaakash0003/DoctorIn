
import React, { useState } from 'react'
import './info-form.scss'

const Login = () => {
	const [ name, setName] = useState('')
	const [ mobile, setMobile] = useState('')
	const [age, setAge] = useState()
	const [reason, setreason] = useState('')

	const handleSubmit = () => {
		if( !name || !mobile || !age || !reason){
			alert('Please fill up the form correctly')
		}
		else {
			alert('Perfect saved successfully...')
		}
	}

	return (
		<div className='info-container'>
			<div className='info-item-container'>
				<h3>Booking Information</h3>
				<div className='info-content'>
					<label htmlFor='name'>Name
						<input 
							type='text' 
							name='name'
							id='name'
							placeholder='Md Masud Rana'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required />
					</label>
					<label htmlFor='mobile'>Mobile
						<input 
							type='number' 
							maxLength={11}
							size={1}
							min='0'
							max='9'
							pattern='[0-9]{1}'
							name='mobile'
							id='mobile'
							placeholder='01677122841'
							value={mobile}
							onChange={(e) => setMobile(e.target.value)}
							required />
					</label>
					<label htmlFor='age'>Age
						<input 
							type= 'number'
							name='age'
							id='age'
							min='0'
							max='9'
							placeholder='10'
							value={age}
							onChange={(e) => setAge(e.target.value)}
							required />
					</label>
					<label htmlFor='reason'>Reason
						<textarea 
							name='reason' 
							id='reason' 
							cols='50' 
							rows='6'
							onChange={(e) => setreason(e.target.value)}>
						</textarea>
					</label>
					<button onClick = {handleSubmit}>Submit</button>
				</div>
			</div>
		</div>
		
	)
}

export default Login