import axios from 'axios'

export const BASE_URL = process.env.REACT_APP_BACKEND_URL

export const axiosInstance = axios.create({
	baseURL: BASE_URL
})
export const fetchDoctors= async () => {
	const path ='/doctors'
	try {
		const response = await axiosInstance.get(path)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
