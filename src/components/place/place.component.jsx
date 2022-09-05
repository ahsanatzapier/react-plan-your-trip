const Place = ({ place }) => {
  const { name: placeName, location: placeLocation, fsq_id: id } = place;
  const { address, locality, country } = placeLocation;
  const { name: categoryName, icon } = place.categories[0];
  const { prefix, suffix } = icon;
  const imageUrl = `${prefix}88${suffix}`;

  return (
    <div
      key={id}
      className="column is-multiline is-12-mobile is-6-tablet is-3-desktop"
    >
      <div class="card">
        <div class="card-content">
          <div class="media mb-0">
            <div class="media-left has-background-dark box">
              <figure class="image is-48x48">
                <img src={imageUrl} alt={placeName} />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-6">{placeName}</p>
              <p class="subtitle is-6">{categoryName}</p>
            </div>
          </div>

          <div class="content box has-background-dark has-text-white">
            <p className="mb-0">{address}</p>
            <p className="mb-0">
              {locality}, {country}
            </p>
          </div>

          <button class="button is-link is-light">Add to Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Place;
