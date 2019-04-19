'use strict'

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then(function (data) {
    $('.member-name').text(data.email)
  })

  // TODO: grab all rateYo classes and loop over to initialize #rateYo-${id} and rating: ${average-rating}
  // $(function () {
  //   $(`#rateYo-1`).rateYo({
  //     halfStar: true,
  //     rating: 3.6
  //   })
  // })
})
