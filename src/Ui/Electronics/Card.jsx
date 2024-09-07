import { Link } from 'react-router-dom';


function Card({src, alt}) {
  return (
    <div>
      <Link to='/electronics/products'>
        <img className='hover:scale-105 w-full' src={src} alt={alt} />
      </Link >
    </div>
  )
}

export default Card
