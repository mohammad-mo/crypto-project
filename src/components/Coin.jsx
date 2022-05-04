import { Link } from "react-router-dom"

const Coin = ({ rank, name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <tr>
      <th>{rank}</th>
      <td>
      <Link to={`coins/${name}`}>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-10 h-10'>
              <img src={image} alt={name} />
            </div>
          </div>
          <div>
            <div className='font-bold'>{name}</div>
          </div>
        </div>
        </Link>
      </td>
      <td>{symbol.toUpperCase()}</td>
      <td>$ {price.toLocaleString()}</td>
      <td>$ {marketCap.toLocaleString()}</td>
      <td className={priceChange > 0 ? 'text-green-600' : 'text-red-600'}>
        {priceChange.toFixed(2)}%
      </td>
    </tr>
  )
}

export default Coin
