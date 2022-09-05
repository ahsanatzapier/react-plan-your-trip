import FsPlace from "../fs-place/fs-place.component";

const FsPlacesContainer = ({ fsPlaces }) => {
  return (
    <div>
      <div className="columns is-multiline is-centered">
        {fsPlaces &&
          fsPlaces.map((place) => {
            return <FsPlace place={place} />;
          })}
      </div>
    </div>
  );
};
export default FsPlacesContainer;
