import AccomodationCard from "../components/AccomodationCard";

const HomePage = (props) => {

  // eslint-disable-next-line react/prop-types
  const {accomodations} = props;

  console.log(accomodations);

  return (
    <main>
       <section className="hero">
        <h1>Chez vous, partout et ailleurs</h1>
       </section>
       <section className="accomodation-list">
          <ul>
            {accomodations && accomodations.map(accomodation => <AccomodationCard cover={accomodation.cover} key={accomodation.id}>{accomodation.title}</AccomodationCard>)}
          </ul>
       </section>
    </main>
  )
}

export default HomePage