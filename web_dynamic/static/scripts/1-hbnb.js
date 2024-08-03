var checked_amenities = {};

$(document).ready(function () {
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      checked_amenities[$((this).data('id'))] = ' ' + $(this).data('name');
    } else {
      delete checked_amenities[$(this).data('id')];
    }
    $('DIV.amenities h4').text(Object.values(checked_amenities));
  });
});
