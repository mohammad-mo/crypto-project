import axios from 'axios'

const BASE_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

export const getCoin = async () => {
  try {
    const response = await axios.get(BASE_URL)
    if (response.status === '404') throw new Error('Could not fetch data.')
    return response.data
  } catch (error) {
    return error.message
  }
}
