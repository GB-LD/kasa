import AccomodationCard from "../components/AccomodationCard";

const HomePage = (props) => {

  // eslint-disable-next-line react/prop-types
  const {accomodations} = props;

  return (
    <main>
       <section className="hero">
        <h1>Chez vous, partout et ailleurs</h1>
       </section>
       <section className="accomodation-list">
          <ul>
            {accomodations && accomodations.map(accomodationData => <AccomodationCard data={accomodationData} key={accomodationData.id}></AccomodationCard>)}
          </ul>
       </section>
    </main>
  )
}

export default HomePage