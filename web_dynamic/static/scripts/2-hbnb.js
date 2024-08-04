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
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (response) {
      const apiStatus = $('div#api_status');
      if (response.status === 'OK') {
        apiStatus.addClass('available');
      } else {
        apiStatus.removeClass('available');
      }
    }
  });
});
