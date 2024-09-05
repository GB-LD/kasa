import Dropdown from "../components/Dropdown"

const fakeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum lorem a venenatis vehicula. Sed tempus sit amet sem ut consequat. Sed libero sapien, maximus at risus a, volutpat bibendum libero. Proin quis lectus vel mi eleifend feugiat vel ac dolor. Curabitur vel lectus nisi. Nunc scelerisque elit justo, eu ultricies odio fermentum id. Aliquam erat volutpat. Donec vel lectus eu lectus rutrum interdum. Sed consectetur ultrices venenatis. Aliquam sed arcu quis nisi convallis aliquet nec ac dolor. Nulla ipsum velit, aliquet et feugiat eu, condimentum eget eros. Curabitur cursus leo eget ex commodo, non condimentum nibh consectetur. Nullam eget neque ac turpis tempus elementum a quis lacus. Sed sollicitudin vestibulum velit eget posuere. Nulla tortor ligula, sollicitudin in risus ac, iaculis fringilla enim."

const AboutPage = () => {
  return (
      <main className="main-about">
      <section className="hero-about">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <section className="dropdown-list">
        <Dropdown dropdownTitle="fabilité" dropdownContent={fakeContent}></Dropdown>
        <Dropdown dropdownTitle="respect" dropdownContent={fakeContent}></Dropdown>
        <Dropdown dropdownTitle="service" dropdownContent={fakeContent}></Dropdown>
        <Dropdown dropdownTitle="sécurité" dropdownContent={fakeContent}></Dropdown>
      </section>
    </main>
  )
}

export default AboutPage