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
});
