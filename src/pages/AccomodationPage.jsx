import { useLocation } from "react-router-dom"

function AccomodationPage() {
    let location = useLocation();
    const accomodationData = location.state;

    return (
        <div>{ accomodationData.title }</div>
    )
}

export default AccomodationPage