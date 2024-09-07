import { Link } from 'react-router-dom';


function Card({src, alt, url}) {
  return (
    <div>
      <Link to={url}>
        <img className='hover:scale-[1.01] w-full' src={src} alt={alt} />
      </Link >
    </div>
  )
}

export default Card
