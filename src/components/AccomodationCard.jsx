const AccomodationCard = (props) => {
  
    return (
    <li className="accomodation-card">
        {/* {props.children} */}
        <img src={props.cover} alt=""/>
        <span>{props.children}</span>
    </li>
  )
}

export default AccomodationCard