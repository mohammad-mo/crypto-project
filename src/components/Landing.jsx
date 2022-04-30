import { useState, useEffect, useContext } from 'react'
import { CoinContext } from '../context/CoinContext'

// API
import { getCoin } from '../services/api'

// Components
import Loading from './Loading'
import Coin from './Coin'

const Landing = () => {
  const { coins, loading, dispatch } = useContext(CoinContext)

  const [seacrh, setSeacrh] = useState('')

  useEffect(() => {
    let isComponentMounted = true
    dispatch({ type: 'SET_LOADING' })
    const fetchApi = async () => {
      const data = await getCoin()
      if (isComponentMounted) {
        dispatch({ type: 'GET_DATA', payload: data })
      }
    }
    fetchApi()

    return () => {
      isComponentMounted = false
    }
  }, [dispatch])

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLocaleLowerCase().includes(seacrh.toLocaleLowerCase()),
  )

  const changeHandler = (e) => {
    setSeacrh(e.target.value)
  }

  if (loading) return <Loading />

  return (
    <>
      <div className='flex justify-center mb-10'>
        <input
          className='input input-bordered input-success w-full max-w-xs'
          type='search'
          placeholder='Find your coin...'
          value={seacrh}
          onChange={changeHandler}
        />
      </div>
      <div className='card overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>Price Change</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => (
              <Coin
                key={coin.id}
                rank={coin.market_cap_rank}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Landing
