'use strict'

$(document).ready(function () {
  $.get('/api/user_data').then(function (data) {
    $('.member-name').text(data.email)
  })

  $(function () {
    $(`#rateYo-1`).rateYo({
      halfStar: true,
      rating: 3.6
    })
  })
})
