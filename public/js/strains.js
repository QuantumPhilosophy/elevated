'use strict'

$(document).ready(function () {
  $.get('/api/user_data').then(function (data) {
    $('.member-name').text(data.email)
  })

  const ratings = $('.rateYo')

  for (let i = 0; i <= ratings.length; i++) {
    $(`#rateYo-${ratings[i].dataset.id}`).rateYo({
      halfStar: true,
      rating: ratings[i].dataset.averageRating
    })
  }

})
