import { useLocation } from "react-router-dom"
import ImagesSlider from "../components/ImagesSlider";
import TagsList from "../components/TagsList";
import StarsRanking from "../components/StarsRanking";
import Dropdown from "../components/Dropdown";

function AccomodationPage() {
    let location = useLocation();
    const accomodationData = location.state;

    function splitName(inputString) {
        const words = inputString.split(' ');
        return words;
    }

    return (
        <section className="accomodation-page-wrapper">
            <ImagesSlider imgUrls={accomodationData.pictures} />
            <section className="section-general">
                <div className="accomodation-title">
                    <h1>{ accomodationData.title }</h1>
                    <h2>{ accomodationData.location }</h2>
                </div>
                <StarsRanking rating={accomodationData.rating}/>
                <TagsList tagsList={accomodationData.tags} />
                <div className="host-details">
                    <div>{splitName(accomodationData.host.name).map((word, index) => <div key={index}>{word}</div>)}</div>
                    <img src={ accomodationData.host.picture } alt="" />
                </div>
            </section>
            <section className="section-details">
                <Dropdown dropdownTitle="description" dropdownContent={accomodationData.description}></Dropdown>
                <Dropdown dropdownTitle="équipement" dropdownContent={accomodationData.equipments}></Dropdown>
            </section>
        </section>
    )
}

export default AccomodationPage