import Place from "../place/place.component";

const PlacesContainer = ({ fsPlaces }) => {
  return (
    <div>
      {/* <div className="box has-background-dark p-4">
        <div className="container has-text-centered"></div>
        <h1 className="title is-5 is-size-5-mobile is-spaced welcome-subtitle mb-0 has-text-centered has-text-white">
          Point of Interest
        </h1>
      </div> */}

      <div className="columns is-multiline is-centered">
        {fsPlaces &&
          fsPlaces.map((place) => {
            return <Place place={place} />;
          })}
      </div>
    </div>
  );
};
export default PlacesContainer;
