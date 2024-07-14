import { useParams } from "react-router-dom"

function AccomodationPage() {
    const params = useParams();
    console.log(params);

    return (
        <div>AccomodationPage</div>
    )
}

export default AccomodationPage