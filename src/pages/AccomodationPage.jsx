import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ImagesSlider from "../components/ImagesSlider";
import TagsList from "../components/TagsList";
import StarsRanking from "../components/StarsRanking";
import Dropdown from "../components/Dropdown";

function AccomodationPage() {
    const navigate = useNavigate();
    const id = useParams();
    const [accomodationData, setAccomodationData] = useState(null);

    useEffect(() => {
        fetch('../../public/data/data.json')
        .then(response => response.json())
        .then(data => {
            const foundAccomodation = data.find(accomodation => accomodation.id === id.id);
            if (!foundAccomodation) {
                // Si l'accommodation n'est pas trouvée, redirige vers la page 404
                navigate("/404");
            } else {
                setAccomodationData(foundAccomodation);
            }
            });
      }, [id, navigate]);

      if (!accomodationData) {
        return <p>Loading...</p>;
    }

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