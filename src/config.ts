const isDev = process.env.NODE_ENV === 'development'
const API_BASE_URL = isDev ? 'http://localhost:4000' : 'https://backend-tombola-production.up.railway.app'

export default API_BASE_URL