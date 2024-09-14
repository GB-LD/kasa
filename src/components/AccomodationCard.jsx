import { Link } from "react-router-dom";

const AccomodationCard = (props) => {
  const accomodationData = props.data ;

  return (
    <li className="accomodation-card">
      <Link className="accomodation-card-link" to={`/accomodation/${accomodationData.id}`} >
          <img src={accomodationData.cover} alt=""/>
          <span>{accomodationData.title}</span>
      </Link>
    </li>
  )
}

export default AccomodationCard