import {
  addPlaceToPlacesArrayForToken,
  getPlacesArrayForToken,
} from "../../utils/firebase.utils";
import { useContext } from "react";
import { TripTokenContext } from "../../contexts/triptoken/triptoken.context";
import { PlacesContext } from "../../contexts/places/places.context";

const Place = ({ place }) => {
  const { name: placeName, location: placeLocation, fsq_id: id } = place;
  const { address, locality, country } = placeLocation;
  const { name: categoryName, icon } = place.categories[0];
  const { prefix, suffix } = icon;
  const imageUrl = `${prefix}88${suffix}`;
  const { tripToken } = useContext(TripTokenContext);
  const { setPlaces } = useContext(PlacesContext);

  const handleClick = async () => {
    await addPlaceToPlacesArrayForToken(tripToken, place);
    const places = await getPlacesArrayForToken(tripToken);
    if (places) {
      setPlaces(places.places);
    }
  };

  return (
    <div
      key={id}
      className="column is-multiline is-12-mobile is-6-tablet is-3-desktop"
    >
      <div className="card">
        <div className="card-content">
          <div className="media mb-0">
            <div className="media-left has-background-dark box">
              <figure className="image is-48x48">
                <img src={imageUrl} alt={placeName} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-6">{placeName}</p>
              <p className="subtitle is-6">{categoryName}</p>
            </div>
          </div>

          <div className="content box has-background-dark has-text-white">
            <p className="mb-0">{address}</p>
            <p className="mb-0">
              {locality}, {country}
            </p>
          </div>

          <button onClick={handleClick} className="button is-link is-light">
            Add to Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Place;
