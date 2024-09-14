import starActive from '../assets/icons/starActive.svg';
import starEmpty from '../assets/icons/starEmpty.svg';

const StarsRanking = ({ rating}) => {
  const totalStars = 5;

  return (
    <ul className="stars-ranking">
    {Array.from({ length: totalStars }, (_, index) => (
      <li key={index}>
            <img
            src={index < rating ? starActive : starEmpty}
            alt={index < rating ? "Active star" : "Empty star"}
          />
      </li>
    ))}
  </ul>
  )
}

export default StarsRanking