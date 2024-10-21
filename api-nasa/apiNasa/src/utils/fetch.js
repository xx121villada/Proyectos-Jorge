const API_KEY = 'evSPRWa4odQAf6zBl2UkXfl8qy0LkupKinoKXnDT'
const APY_URL = 'https://api.nasa.gov/planetary/apod'

export default async () => {
    try {
        const response = await fetch(`${APY_URL}?api_key=${API_KEY}`)
        const data = await response.json();
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}