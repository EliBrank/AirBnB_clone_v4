const checkedAmenities = {};

$(document).ready(function () {
  $('input[type=checkbox]').change(function () {
    const id = $(this).data('id');
    const name = $(this).data('name');
    if (this.checked) {
      checkedAmenities[id] = name;
    } else {
      delete checkedAmenities[id];
    }
    $('div.amenities h4').text(Object.values(checkedAmenities).join(', '));
  });

  $.ajax({
    type: 'GET',
    url: 'http://localhost:5001/api/v1/status/',
    success: function (response) {
      const apiStatus = $('div#api_status');
      if (response.status === 'OK') {
        apiStatus.addClass('available');
      } else {
        apiStatus.removeClass('available');
      }
    }
  });

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (data) {
      const placesSection = $('section.places');

      // clear existing content if any
      placesSection.empty();

      data.forEach(place => {
        const template = `
          <article>
            <div class="title_box">
              <h2>${place.name}</h2>
              <div class="price_by_night">$${place.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${place.max_guest} Guests</div>
              <div class="number_rooms">${place.number_rooms} Bedrooms</div>
              <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
            </div>
            <div class="user">
            </div>
            <div class="description">
              ${place.description}
            </div>
          </article>
        `;

        placesSection.append(template);
      });
    }
  });
});
