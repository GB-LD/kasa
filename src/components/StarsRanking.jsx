import starActive from '../assets/icons/starActive.svg';
import starEmpty from '../assets/icons/starEmpty.svg';

const StarsRanking = (props) => {
  const ranking = parseInt(props.rating, 10);
  const restRanking = 5 - ranking;
  const htmlRanking = [];

  for (let i=0; i<ranking; i++) {
    htmlRanking.push(starActive);
  }

  if (restRanking > 0) {
    for (let i=0; i<restRanking; i++) {
      htmlRanking.push(starEmpty);
    }
  }

  return (

    <ul className='stars-ranking'>
      {htmlRanking.map(star => <li><img src={star} /></li>)}
    </ul>
  )
}

export default StarsRanking