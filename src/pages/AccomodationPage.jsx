import { useLocation } from "react-router-dom"
import ImagesSlider from "../components/ImagesSlider";

function AccomodationPage() {
    let location = useLocation();
    const accomodationData = location.state;

    return (
        <section className="accomodation-page-wrapper">
            <ImagesSlider imgUrls={accomodationData.pictures} />
            <div>{ accomodationData.title }</div>
        </section>
    )
}

export default AccomodationPage